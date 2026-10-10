#!/usr/bin/env bash
# Renders cv/<locale>.html to public/cv/titorjs-cv-<locale>.pdf with headless Chrome.
set -euo pipefail
cd "$(dirname "$0")"
chrome="${CHROME:-google-chrome}"
for src in *.html; do
  locale="${src%.html}"
  out="../public/cv/titorjs-cv-${locale}.pdf"
  "$chrome" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$out" "file://$PWD/$src" 2>/dev/null
  echo "wrote ${out#../}"
done
