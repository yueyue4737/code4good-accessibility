# Code4Good-accessibility

![Website](https://img.shields.io/website?color=Red&label=RedCross&logo=addthis&logoColor=Red&up_color=Red&up_message=Code4Good&url=http%3A%2F%2Fcode4good.io%2F)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/annahinnyc/code4good-accessibility?color=gree&label=Pull%20Requests)
![GitHub contributors](https://img.shields.io/github/contributors/annahinnyc/code4good-accessibility?color=Blue)
![GitHub repo size](https://img.shields.io/github/repo-size/annahinnyc/code4good-accessibility?color=Gray&label=Repo%20Size)

## Code4Good - WCAG 2.0 Accessibility Project

The Problem Statement
The American Red Cross "prevents and alleviates human suffering "in the face of emergencies by mobilizing the power of volunteers and the generosity of donors." The RCO and RCB platforms were implemented in 2018 without WCAG compliance and there has not been a concerted effort to implement the necessary changes since then.

We should do everything within our power to improve digital inclusion so that all our donors and volunteers are able to support the mission.

How will we measure success on this project?
WCAG 2.0 success criteria are written as testable statements that are not technology-specific. Guidance about satisfying the success criteria in specific technologies, as well as general information about interpreting the success criteria, is provided in separate documents. See Web Content Accessibility Guidelines (WCAG) Overview for an introduction and links to WCAG technical and educational material.

What do we already know?
Web Content Accessibility Guidelines (WCAG) 2.0 covers a wide range of recommendations for making Web content more accessible. Following these guidelines will make content accessible to a wider range of people with disabilities, including blindness and low vision, deafness and hearing loss, learning disabilities, cognitive limitations, limited movement, speech disabilities, photosensitivity and combinations of these. Following these guidelines will also often make your Web content more usable to users in general.

`Web Content Accessibility Guidelines` (WCAG) Overview: https://www.w3.org/WAI/standards-guidelines/wcag/
Mobile Accessibility: https://www.w3.org/TR/mobile-accessibility-mapping/
How to Meet WCAG (Quick Reference): https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0

### Guidelines for scanning urls:

#### We will be using the following tools to scan each url:

1. Chrome Dev Tools in-browser audit tool: https://developers.google.com/web/tools/chrome-devtools/accessibility/reference
   a. Check both boxes for Accessibility & Performance.
2. Microsoft Accessibility Insights: https://accessibilityinsights.io/
3. axe: https://www.deque.com/axe/

#### We will be scanning the urls in these three browsers:

1. Chrome
2. Firefox
3. Safari

#### We will be recording the scan results in JSON format on Github.

### Workflow:

1. View open and available tickets in JIRA that are tagged with WCAG. These tickets will refer to a set of 50 urls that need to be scanned. To see the urls in the ticket, open the Red Cross sitemap spreadsheet and find the corresponding ticket in the JIRA column.
2. Scan the urls with the assigned scanning tool and save the JSON results.
3. Once all 50 urls in your ticket are scanned with all 3 tools in all three browsers. Note: if you are running Windows or Linux, you may need to download Safari 5.1.10 for Snow Leopard. You may also ask another Code4Gooder running a MacOS to assist in scanning your urls in Safari.
4. Create a new file in the data folder located in the scan results folder using the naming convention in the documentation template below.Save all of your JSON results into your newly created file.
5. When you are finished scanning and recording the JSON results, commit your work and put in a pull request.
6. Post the link to the pull request in the comments of your JIRA ticket and change the ticket status to In Progress.

### How to use the documentation template:

1. In your local fork in the data folder located inside the scan-results folder, create a file using this naming convention: C4G-JiraTicketNumber_AuditToolUsed_URLNumber.json. For example: CG4-16_CD_7.json.

Audit Tool abbreviations:

- AT = allyTools
- AX = Axe
- CD = ChromeDev
- FF = Firefox
- IN = MS Insights
- WK = Safari

2. Inside your newly created file, copy in the JSON results from your scan.

3. Commit your work often, at least after adding new JSON data for each url.

4. Put in a pull request when you are finished scanning and saving results for all of the urls in your ticket.

## Questions, concerns, and suggestions? Post questions in Slack in the #code-for-good channel.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
View here: https://rbitting.github.io/arc-accessibility-dashboard/

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn run deploy`

Deploy code to Github Pages. Will appear here: https://rbitting.github.io/arc-accessibility-dashboard/

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
