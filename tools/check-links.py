#!/usr/bin/env python3
"""Check every external link in the site's HTML files.

Usage (from the repository root, with internet access):
    python3 tools/check-links.py

Sends a HEAD request (falls back to GET) to each unique http(s) URL and reports
the status. Exit code 1 if any link fails. Standard library only.
"""
import concurrent.futures
import pathlib
import re
import sys
import urllib.error
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
LINK = re.compile(r'<a\s[^>]*href="(https?://[^"]+)"', re.I)
HEADERS = {'User-Agent': 'Mozilla/5.0 (link-checker)'}


def collect():
    found = {}
    for page in sorted(ROOT.glob('*.html')):
        for url in LINK.findall(page.read_text(encoding='utf-8')):
            found.setdefault(url.replace('&amp;', '&'), set()).add(page.name)
    return found


def check(url):
    for method in ('HEAD', 'GET'):
        request = urllib.request.Request(url, method=method, headers=HEADERS)
        try:
            with urllib.request.urlopen(request, timeout=20) as response:
                return url, response.status
        except urllib.error.HTTPError as error:
            if method == 'GET' or error.code not in (403, 405, 501):
                return url, error.code
        except Exception as error:  # DNS failure, timeout, TLS error
            if method == 'GET':
                return url, type(error).__name__
    return url, 'unknown'


def main():
    links = collect()
    print('Checking {} unique links...'.format(len(links)))
    failures = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        for url, status in pool.map(check, links):
            ok = isinstance(status, int) and status < 400
            failures += 0 if ok else 1
            print('{:>5}  {}  ({})'.format(status, url, ', '.join(sorted(links[url]))))
    print('{} failing.'.format(failures))
    return 1 if failures else 0


if __name__ == '__main__':
    sys.exit(main())
