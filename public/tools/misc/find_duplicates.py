#!/usr/bin/env python3
import json
import sys
import logging

logger = logging.getLogger(__name__)

seen_urls = {} # maps requestedUrl to filename
final_url_map = {} # maps finalUrls to set of requestedUrls
for f in sys.argv[1:]:
    try:
        j = json.load(open(f))
        req_url = j['requestedUrl']
        final_url = j['finalUrl']
        # TODO: possibly check for http response codes
        if req_url in seen_urls:
            logger.info(f'{f} contains audit for requestedUrl that was already seen')
            print(f)
        else:
            final_url_map.setdefault(final_url, set()).add(req_url)
            seen_urls[req_url] = f
    except Exception as err:
        logger.error(f'Failed to process audit file {f}: {err}')

# Finally, print final_urls that have multiple sources
for final_url, sources in final_url_map.items():
    if len(sources) > 1:
        logger.warn(f'# Multiple sources found for finalUrl: {final_url}')
        for s in sorted(sources):
            logger.warn(f'   - {seen_urls[s]}: {s}')
