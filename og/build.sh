#!/usr/bin/env bash
# Renders og/<name>.html to public/og/<name>.png (1200×630) with headless Chrome.
set -euo pipefail
cd "$(dirname "$0")"
chrome="${CHROME:-google-chrome}"
for src in *.html; do
  name="${src%.html}"
  "$chrome" --headless=new --disable-gpu --hide-scrollbars --window-size=1200,630 \
    --virtual-time-budget=2000 --screenshot="../public/og/${name}.png" "file://$PWD/$src" 2>/dev/null
  echo "wrote public/og/${name}.png"
done
