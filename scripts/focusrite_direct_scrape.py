#!/usr/bin/env python3
"""Baixa galerias oficiais de produto diretamente de focusrite.com."""

from __future__ import annotations

import argparse
import hashlib
import html
import re
from io import BytesIO
from pathlib import Path
from urllib.parse import urlparse

import requests
from PIL import Image


PRODUCT_IMAGE_RE = re.compile(
    r"https://cdn11\.bigcommerce\.com/[^\"'<>\\\s]+?"
    r"/images/stencil/(?:original|\d+w|\d+x\d+)/products/"
    r"(?P<product>\d+)/(?P<image>\d+)/(?P<filename>[^\"'<>?\\\s]+)"
    r"(?:\?[^\"'<>\\\s]*)?",
    re.IGNORECASE,
)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140 Safari/537.36"
    )
}


def slug_from_url(url: str) -> str:
    return urlparse(url).path.rstrip("/").rsplit("/", 1)[-1]


def gallery_urls(page_html: str) -> list[str]:
    page_html = html.unescape(page_html).replace("\\/", "/")
    found: dict[tuple[str, str], str] = {}
    for match in PRODUCT_IMAGE_RE.finditer(page_html):
        key = (match.group("product"), match.group("image"))
        url = match.group(0)
        url = re.sub(r"/images/stencil/[^/]+/", "/images/stencil/original/", url)
        found[key] = url
    return list(found.values())


def extension_for(image: Image.Image) -> str:
    fmt = (image.format or "").upper()
    return ".png" if fmt == "PNG" else ".jpg"


def download_product(session: requests.Session, page_url: str, output: Path) -> tuple[int, int]:
    response = session.get(page_url, timeout=40)
    response.raise_for_status()
    urls = gallery_urls(response.text)
    if not urls:
        raise RuntimeError("nenhuma imagem da galeria de produto encontrada")

    output.mkdir(parents=True, exist_ok=True)
    seen_hashes: set[str] = set()
    saved = 0
    for image_url in urls:
        image_response = session.get(image_url, timeout=60)
        image_response.raise_for_status()
        payload = image_response.content
        digest = hashlib.sha256(payload).hexdigest()
        if digest in seen_hashes:
            continue
        seen_hashes.add(digest)

        image = Image.open(BytesIO(payload))
        image.verify()
        image = Image.open(BytesIO(payload))
        width, height = image.size
        if width < 600 or height < 300:
            print(f"  ignorada {width}x{height}: {image_url}")
            continue

        extension = extension_for(image)
        destination = output / f"prod_{saved:02d}_{width}x{height}{extension}"
        destination.write_bytes(payload)
        print(f"  salva {destination.name} ({len(payload) / 1024:.0f} KB)")
        saved += 1
    return len(urls), saved


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("urls", nargs="+")
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()

    session = requests.Session()
    session.headers.update(HEADERS)
    failures: list[str] = []
    for index, page_url in enumerate(args.urls, 1):
        slug = slug_from_url(page_url)
        print(f"[{index}/{len(args.urls)}] {slug}")
        try:
            candidates, saved = download_product(session, page_url, args.output / slug)
            print(f"  resultado: {saved}/{candidates}")
            if not saved:
                failures.append(slug)
        except Exception as exc:
            print(f"  ERRO: {exc}")
            failures.append(slug)

    if failures:
        print("Falhas:", ", ".join(failures))
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
