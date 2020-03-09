#!/Users/melocal/anaconda3/envs/c4g-wcag/bin python
import os
import subprocess
import sys

import openpyxl
import selenium
from openpyxl import load_workbook
from selenium import webdriver

print("Python --version ==", sys.version)
print("openpyxl.__version__ ==", openpyxl.__version__)
print("selenium version ==", selenium.__version__)

os.chdir('/Users/melocal/MyDox/RedCross/Code4Good/WCAG2.0')
driver = webdriver.Safari(executable_path='/usr/bin/safaridriver')

# wb = openpyxl.load_workbook('C4G-166 RCB Top Sites B-3.xlsx')
# wb = openpyxl.load_workbook('C4G-164 RCB Top Sites B-2.xlsx')
# wb = openpyxl.load_workbook('C4G-160 RCO Top 200 B-4.xlsx')
# wb = openpyxl.load_workbook('C4G-90 RCO About Us B-3.xlsx')
wb = openpyxl.load_workbook('C4G-88 RCO About Us B-2.xlsx')
sheets = wb.sheetnames
sheet0 = wb[sheets[0]]
print(sheet0.max_row)

for i in range(2, sheet0.max_row):
    url = sheet0['I' + str(i)].value
    print(i, url)
    driver.get(url)
    print(i, driver.title)

    # pause the script to click around with mouse
    input()
