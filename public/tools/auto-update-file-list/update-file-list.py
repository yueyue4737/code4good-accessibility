import json
import os

FileList = [{'filename': f} for f in os.listdir('../../scan-results/data')]

with open('../../scan-results/files.json', 'w') as outfile:
    json.dump(FileList, outfile)
