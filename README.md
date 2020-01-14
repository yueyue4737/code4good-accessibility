# code4good-accessibility

Code4Good - WCAG 2.0 Accessibility Project

The Problem Statement
The American Red Cross "prevents and alleviates human suffering "in the face of emergencies by mobilizing the power of volunteers and the generosity of donors." The RCO and RCB platforms were implemented in 2018 without WCAG compliance and there has not been a concerted effort to implement the necessary changes since then.

We should do everything within our power to improve digital inclusion so that all our donors and volunteers are able to support the mission.

How will we measure success on this project?
WCAG 2.0 success criteria are written as testable statements that are not technology-specific. Guidance about satisfying the success criteria in specific technologies, as well as general information about interpreting the success criteria, is provided in separate documents. See Web Content Accessibility Guidelines (WCAG) Overview for an introduction and links to WCAG technical and educational material.

What do we already know?
Web Content Accessibility Guidelines (WCAG) 2.0 covers a wide range of recommendations for making Web content more accessible. Following these guidelines will make content accessible to a wider range of people with disabilities, including blindness and low vision, deafness and hearing loss, learning disabilities, cognitive limitations, limited movement, speech disabilities, photosensitivity and combinations of these. Following these guidelines will also often make your Web content more usable to users in general.

Web Content Accessibility Guidelines (WCAG) Overview: https://www.w3.org/WAI/standards-guidelines/wcag/
Mobile Accessibility: https://www.w3.org/TR/mobile-accessibility-mapping/
How to Meet WCAG (Quick Reference): https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0

Guidelines for scanning urls:
We will be using the following tools to scan each url:
1. Chrome Dev Tools in-browser audit tool: https://developers.google.com/web/tools/chrome-devtools/accessibility/reference
  a. Check both boxes for Accessibility & Performance.
2. Microsoft Accessibility Insights: https://accessibilityinsights.io/
3. axe: https://www.deque.com/axe/

We will be scanning the urls in these three browsers:
1. Chrome
2. Firefox
3. Safari

We will be recording the scan results in JSON format on Github.

Workflow:
1. View open and available tickets in JIRA that are tagged with WCAG.  These tickets will refer to a set of 50 urls that need to be scanned.  To see the urls in the ticket, open the Red Cross sitemap spreadsheet and find the corresponding ticket in the JIRA column.
2. Scan the urls with Chrome Dev Tools and save the JSON results.
3. Scan the urls with Microsoft Accessibility Insights and save the JSON results.
4. Scan the urls with axe and save the JSON results.
5. Once all 50 urls in your ticket are scanned with all 3 tools in all three browsers. Note: if you are running Windows or Linux, you may need to download Safari 5.1.10 for Snow Leopard.  You may also ask another Code4Gooder running a MacOS to assist in scanning your urls in Safari.
6. Save all of your JSON results using the template provided.
7. When you are finished scanning and recording the JSON results, commit your work and put in a pull request.
8. Post the link to the pull request in the comments of your JIRA ticket and change the ticket status to In Progress.

How to use the documentation template:
1. In your local fork in the scan-results folder, make a copy of the folder results_ticketnumber_example.  Remove the .example from the name and replacing ticket number with your JIRA ticket number. (e.g. results.CG4-16)

2. Inside your newly created folder, make a copy of the file results_jiraId_toolAbbreviation_sequence_example.js.  Remove the _example from the name.

Replace jiraId with your JIRA ticket number and toolAbbreviation with the audit tool you are using.

Audit Tool abbreviations:
AT = allyTools
AX = Axe
CD = ChromeDev
FF = Firefox
IN = MS Insights

Replace sequence with the row number in your ticket's list of urls that you are scanning. (e.g. C4G-16_AT_1.json = allyTools audit, site 1
C4G-16_AT_2.json = allyTools audit, site 2...50).

3. Inside your newly created file, complete the template with the actual url, scanning tools used, and the JSON results from your scans.

4. Commit your work often, at least after adding new JSON data for each url.
5. Put in a pull request when you are finished scanning and saving results for all of the urls in your ticket.


Questions, concerns, and suggestions?  Post questions in Slack in the #code-for-good channel.