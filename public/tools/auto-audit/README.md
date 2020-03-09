# Auto-Audit - Automating the WCAG2.0 Project for auditing ARC webpages

## Introduction:

Auto-Audit is a python script I wrote to automate the repetitive part of the Code4Good - WCAG 2.0 Accessibility Project where we pull a JIRA ticket and scan each of the 50 URLs in the spreadsheet attached to each ticket, and save the scan results to a .json file on GitHub.

## Scope:

this is a simple python script that has 2 purposes:

1. read each line of the input spreadsheet with openpyxl
2. copy that url into the address bar of the browser and get that url with selenium

## Tools and Technologies:

This script is written in Python 3.5
I use Anaconda for my virutal environment, as you can see in the hash-bang line at top of script.
Imported modules include:

- openpyxl for reading the spreadsheet
- selenium for opening the web page in the browser

## Limitations:

I am first going to make this tool work in Safari. One of the limitations of working in Safari is that I am not experienced with Apple Script to code the Safari browser Audit tool.

## Blockers

I tried to run safaridriver under python 3.4 and get error KeyError: 'status' because safaridriver is not compatible with python 3.4
It works with python 3.5+ but then pynput requires python 3.4
So, I either do not use pynput or do not use safaridriver.

Solution: I installed Python 3.5 and solved the safaridriver issue.
Sacraficed pynput for the greater good - no more compatability issues with that.

## JIRA ticket

Download the xlsx file attached the ticket and save in your working directory. For example, my working directory is /Users/melocal/MyDox/RedCross/Code4Good/WCAG2.0/

The script will read the .xlsx file, so you don't have to open it in excel (unless you want to, it doesn't matter). However, it is a good idea to look at the .xlsx file to find which column for the url's.
