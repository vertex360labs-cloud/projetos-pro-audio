#!/usr/bin/env bash
set -euo pipefail

photos="/Users/rodrigofernandes/Desktop/06 - Fotos Produtos - Site"
output="public/images/blog/products"

mkdir -p "$output"

build_card() {
  local article="$1"
  local source="$2"
  local corner_color
  corner_color="$(magick "$source" -auto-orient -format '%[pixel:p{0,0}]' info:)"
  magick "$source" -auto-orient -resize '1500x820' \
    -background "$corner_color" -gravity center -extent 1600x900 \
    -strip -quality 88 "$output/$article.webp"
  echo "$article"
}

while IFS='|' read -r article source mode; do
  [[ -n "$article" ]] || continue
  build_card "$article" "$photos/$source"
done <<'EOF'
a77h-adam-audio-monitor-estudio|Adam/a77h/prod_00_2400x2400.png
antelope-galaxy-32-synergy-core-upgrade-interface|Antelope/galaxy-32-synergy-core/galaxy-32-synergy-core-1.jpg
antelope-galaxy-64-upgrade-interface-audio|Antelope/galaxy-64-synergy-core/galaxy-64-synergy-core-3.jpg
como-escolher-monitoracao-de-estudio-papel-pmc8-2|Fotos PMC/pmc-8-2/prod_0.jpg
como-escolher-monitoracao-e-o-papel-do-adam-audio-a4v-no-estudio|Adam/a4v/prod_00_2400x2400.png
como-escolher-monitoracao-e-o-papel-do-adam-audio-t7v|Adam/t7v/prod_00_2400x2400.png
como-escolher-monitoracao-estudio-adam-audio-a7v|Adam/a7v/prod_00_2400x2400.png
como-escolher-monitoracao-estudio-adam-audio-t5v|Adam/t5v/prod_00_2400x2400.png
como-escolher-monitoracao-estudio-adam-audio-t8v|Adam/t8v/prod_00_2400x2400.png
como-escolher-monitoracao-estudio-adam-d3v|Adam/d3v/prod_00_2400x2400.png
como-escolher-monitoracao-estudio-atc-scm-110-pro|Fotos ATC/scm110asl-pro/prod_0.jpg|original
como-escolher-monitoracao-estudio-atc-scm45a-pro|Fotos ATC/scm45a-pro/prod_0.jpg|original
como-escolher-monitoracao-estudio-subwoofer-adam-t10s|Adam/t10s/prod_00_2400x2400.png
como-escolher-monitoracao-papel-pmc-6-2|Fotos PMC/pmc-6-2/prod_0.jpg
como-escolher-monitoracao-papel-pmc-6-pair|Fotos PMC/pmc-6/prod_0.jpg
escolhendo-monitoracao-ideal-pmc8-2|Fotos PMC/pmc-8-2/prod_0.jpg
neve-8424-console-analogico|Neve/neve-8424/prod_0.jpg
organizacao-sinal-limpo-patchbay-redco-r-196-d25|Redco/redco-r196-d25pg-db25-96pt-tt-patchbay/prod_0.jpg
quando-vale-o-upgrade-interface-ssl-18|ssl/ssl-18/ssl-18-1.jpg|white
quando-vale-o-upgrade-interface-ssl-2-plus-mkii|ssl/ssl-2-plus-mkii/ssl-2-plus-mkii-1.jpg|white
quando-vale-o-upgrade-para-a-interface-ssl-12|ssl/ssl-12/ssl-12-3.jpg|white
quando-vale-o-upgrade-para-antelope-orion-32-gen-4|Antelope/orion-32-gen-4/orion-32-gen-4-3.jpg
quando-vale-o-upgrade-para-ssl-big-six|ssl/big-six/big-six-1.jpg|white
quando-vale-upgrade-interface-antelope-discrete-8-oryx|Antelope/discrete-8-oryx-synergy-core/discrete-8-oryx-synergy-core-1.jpg|white
quando-vale-upgrade-interface-audio-ssl-18|ssl/ssl-18/ssl-18-1.jpg|white
quando-vale-upgrade-interface-audio-ssl-umd192|ssl/umd192-studio/umd192-studio-1.jpg
quando-vale-upgrade-interface-audio|ssl/alpha8/alpha8-1.jpg|white
quando-vale-upgrade-interface-clarett-8pre-usb|Focusrite/clarett-plus-8pre/prod_00_2400x2400.png
redco-8-ch-ez-id-mogami-organizacao-sinal-limpo|Redco/mogami-w2932/prod_0.jpg|white
redco-ttpbay-1-ru-prog-organizacao-e-sinal-limpo|Redco/redco-r196-d25pg-db25-96pt-tt-patchbay/prod_0.jpg
ssl-4000-revival-channel-strip-preto|ssl/revival4000/revival4000-1.jpg
ssl-alpha-8-interface-audio|ssl/alpha8/alpha8-1.jpg|white
ssl-bus-plus-compressor-equalizador|ssl/the-bus-plus/the-bus-plus-4.jpg|cover
ssl-fusion-compressor-preto|ssl/fusion/fusion-1.jpg
ssl-origin-console-analogico|ssl/origin-series-consoles/origin-series-consoles-1.jpg
ssl-puredrive-octo-pre-amplificador|ssl/puredriveocto/puredriveocto-1.jpg
ssl-puredrive-quad-pre-amplificador|ssl/puredrivequad/puredrivequad-1.jpg
ssl-super-9000-channel-strip-impacto-setup-hibrido|ssl/super-9000/super-9000-1.jpg
ssl-uc1-controlador-daw|ssl/uc1/uc1-1.jpg
ssl-uf1-controlador-midi|ssl/uf1/uf1-1.jpg
ssl-uf8-controlador-de-daw|ssl/uf8/uf8-1.jpg
tascam-mixcast4-upgrade-interface-audio|Tascam/mixcast_4/prod_0.jpg
tascam-us-16x08-quando-vale-o-upgrade|Tascam/us-16x08/prod_0.jpg
EOF
