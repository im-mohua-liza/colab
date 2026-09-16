#!/usr/bin/env python3
"""Write one stub page per old colabglobal.org path so old links land on the
right new page (GitHub Pages has no server-side redirects). Reads
content/redirects.json; run from the repo root after changing a target."""
import json, os, html
cfg = json.load(open('content/redirects.json')); base = cfg['base'].rstrip('/')
TPL = """<!doctype html><html lang="en"><head><meta charset="utf-8"><title>CoLab: page moved</title>
<meta name="robots" content="noindex"><link rel="canonical" href="{full}"><meta http-equiv="refresh" content="0; url={target}">
<script>location.replace({js});</script></head><body style="font-family:sans-serif;padding:40px">
<p>This page has moved. <a href="{target}">Continue to {name}</a>.</p></body></html>
"""
n = 0
for old, new in cfg['redirects'].items():
    target = base + new; full = 'https://colabglobal.org' + new
    d = os.path.join(*old.split('/')); os.makedirs(d, exist_ok=True)
    open(os.path.join(d, 'index.html'), 'w').write(TPL.format(full=full, target=target, js=json.dumps(target), name=html.escape(new.strip('/') or 'the homepage')))
    n += 1
print('redirect stubs written:', n)
