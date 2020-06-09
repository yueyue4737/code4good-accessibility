#!/usr/bin/env python3
import os
import sys
import json
import math
from collections import Counter
from statistics import variance

# Read elements from the json perf audit, key by requestedUrl
# Things we want to extract are:
# requestedUrl
# audits.first-contentful-paint.{score,numericValue}
# audits.first-meaningful-paint.{score,numericValue}
# audits.speed-index.{score,numericValue}

AUDITS = [
    'first-contentful-paint',
    'first-meaningful-paint',
    'speed-index',
    ]
AUDIT_VALUES = ['score', 'numericValue']

scores = {}  # scores[requestedUrl][path_to_number]
url_hits = Counter()
for audit_file in sys.argv[1:]:
  j = None
  url = None
  try:
    j = json.load(open(audit_file))
    url = j['requestedUrl']
  except Exception as err:
    print(f'Failed to parse {audit_file}: {err}')
    continue

  audits = scores.setdefault(url, {})
  url_hits.update([j['requestedUrl']])
  for a_name in AUDITS:
    for a_value in AUDIT_VALUES:
      try:
        val = j['audits'][a_name][a_value]
        if type(val) != float:
          continue
        if a_value == 'numericValue':
          val /= 1000.0  # Convert to seconds
        audits.setdefault(f'{a_name}.{a_value}', []).append(val)
      except KeyError:
        print(f'Failed to read {a_name}.{a_value} for {url}')

repeated_urls = [url for url, cnt in url_hits.items() if cnt > 1]
print(f'Found {len(repeated_urls)} urls with multiple hits')

totals = {}
for url in repeated_urls:
  print(f'--- url (#{url_hits[url]}): {url} ---')
  for stat, values in sorted(scores[url].items()):
    totals.setdefault(stat, []).extend(values)
    avg = sum(values) / len(values)
    stddev = 0.0
    if len(values) > 1:
      stddev = math.sqrt(variance(values))
    # rng = (max(values) - min(values)) / 2
    # err_pct = rng / avg * 100
    print(f'  {stat:>35}: avg {avg:>8,.4f} | stddev ±{stddev:<8,.4f}')
