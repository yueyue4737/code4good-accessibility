// URL scanned: https://www.redcross.org/home
// Scanning tool used: Chrome Dev Tools Accessibility Audit
// JSON results:

{
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
    "environment": {
    "networkUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3694.0 Safari/537.36 Chrome-Lighthouse",
      "hostUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
        "benchmarkIndex": 1088
  },
  "lighthouseVersion": "5.2.0",
    "fetchTime": "2019-12-18T14:45:36.909Z",
      "requestedUrl": "https://www.redcross.org/",
        "finalUrl": "https://www.redcross.org/",
          "runWarnings": [],
            "audits": {
    "accesskeys": {
      "id": "accesskeys",
        "title": "`[accesskey]` values are unique",
          "description": "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more](https://dequeuniversity.com/rules/axe/3.1/accesskeys?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "aria-allowed-attr": {
      "id": "aria-allowed-attr",
        "title": "`[aria-*]` attributes match their roles",
          "description": "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-allowed-attr?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "aria-required-attr": {
      "id": "aria-required-attr",
        "title": "`[role]`s have all required `[aria-*]` attributes",
          "description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-required-attr?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "aria-required-children": {
      "id": "aria-required-children",
        "title": "Elements with `[role]` that require specific children `[role]`s, are present",
          "description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-required-children?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "aria-required-parent": {
      "id": "aria-required-parent",
        "title": "`[role]`s are contained by their required parent element",
          "description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-required-parent?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "aria-roles": {
      "id": "aria-roles",
        "title": "`[role]` values are valid",
          "description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-roles?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "aria-valid-attr-value": {
      "id": "aria-valid-attr-value",
        "title": "`[aria-*]` attributes do not have valid values",
          "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-valid-attr-value?application=lighthouse).",
            "score": 0,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [
            {
              "key": "node",
              "itemType": "node",
              "text": "Failing Elements"
            }
          ],
            "items": [
              {
                "node": {
                  "type": "node",
                  "selector": ".slick-current",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,DIV,3,DIV",
                  "snippet": "<div class=\"rco-card col slick-slide slick-current slick-active\" style=\"width: 370px;\" data-slick-index=\"0\" aria-hidden=\"false\" tabindex=\"-1\" role=\"option\" aria-describedby=\"slick-slide00\">",
                  "explanation": "Fix all of the following:\n  Invalid ARIA attribute value: aria-describedby=\"slick-slide00\"",
                  "nodeLabel": "Red Cross Locates a Long-lost Sister and Best Friend"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": "div[data-slick-index=\"\\31 \"]",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,DIV,4,DIV",
                  "snippet": "<div class=\"rco-card col slick-slide slick-active\" style=\"width: 370px;\" data-slick-index=\"1\" aria-hidden=\"false\" tabindex=\"-1\" role=\"option\" aria-describedby=\"slick-slide01\">",
                  "explanation": "Fix all of the following:\n  Invalid ARIA attribute value: aria-describedby=\"slick-slide01\"",
                  "nodeLabel": "Generous Gift of Blood Donations Helps Keep the Holidays Merry and Bright"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": "div[data-slick-index=\"\\32 \"]",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,DIV,5,DIV",
                  "snippet": "<div class=\"rco-card col slick-slide slick-active\" style=\"width: 370px;\" data-slick-index=\"2\" aria-hidden=\"false\" tabindex=\"-1\" role=\"option\" aria-describedby=\"slick-slide02\">",
                  "explanation": "Fix all of the following:\n  Invalid ARIA attribute value: aria-describedby=\"slick-slide02\"",
                  "nodeLabel": "El Salvador: Kid Heroes Practice Disaster Skills"
                }
              }
            ],
              "debugData": {
          "type": "debugdata",
            "impact": "critical",
              "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412"
              ]
        }
      }
    },
    "aria-valid-attr": {
      "id": "aria-valid-attr",
        "title": "`[aria-*]` attributes are valid and not misspelled",
          "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more](https://dequeuniversity.com/rules/axe/3.1/aria-valid-attr?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "audio-caption": {
      "id": "audio-caption",
        "title": "`<audio>` elements contain a `<track>` element with `[kind=\"captions\"]`",
          "description": "Captions make audio elements usable for deaf or hearing-impaired users, providing critical information such as who is talking, what they're saying, and other non-speech information. [Learn more](https://dequeuniversity.com/rules/axe/3.1/audio-caption?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "button-name": {
      "id": "button-name",
        "title": "Buttons have an accessible name",
          "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn more](https://dequeuniversity.com/rules/axe/3.1/button-name?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "bypass": {
      "id": "bypass",
        "title": "The page contains a heading, skip link, or landmark region",
          "description": "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more](https://dequeuniversity.com/rules/axe/3.1/bypass?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "color-contrast": {
      "id": "color-contrast",
        "title": "Background and foreground colors do not have a sufficient contrast ratio.",
          "description": "Low-contrast text is difficult or impossible for many users to read. [Learn more](https://dequeuniversity.com/rules/axe/3.1/color-contrast?application=lighthouse).",
            "score": 0,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [
            {
              "key": "node",
              "itemType": "node",
              "text": "Failing Elements"
            }
          ],
            "items": [
              {
                "node": {
                  "type": "node",
                  "selector": "a[data-aa-header-utility=\"default\"]",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,NAV,0,UL,3,LI,0,A",
                  "snippet": "<a data-aa-header-utility=\"default\" style=\"color:;\" href=\"https://www.redcross.org/account.html/sign-in\">\n                                Sign In\n                            </a>",
                  "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.16 (foreground color: #6d6e70, background color: #e8e8e8, font size: 9.0pt, font weight: normal). Expected contrast ratio of 4.5:1",
                  "nodeLabel": "Sign In"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": "a[data-aa-header-utility-store=\"header\\ utility\\ not\\ set\"]",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,NAV,0,UL,10,LI,0,A",
                  "snippet": "<a data-aa-header-utility-store=\"header utility not set\" style=\"color:rgba(225,27,34,1);\" class=\"bold\" href=\"https://www.redcrossstore.org/?utm_source=RCO&amp;utm_medium=utilnav&amp;utm_campaign=shopbutton&amp;utm_content=resputil\">",
                  "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.91 (foreground color: #e11b22, background color: #e8e8e8, font size: 10.5pt, font weight: bold). Expected contrast ratio of 4.5:1",
                  "nodeLabel": "Shop the Red Cross Store"
                }
              }
            ],
              "debugData": {
          "type": "debugdata",
            "impact": "serious",
              "tags": [
                "cat.color",
                "wcag2aa",
                "wcag143"
              ]
        }
      }
    },
    "definition-list": {
      "id": "definition-list",
        "title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>` or `<template>` elements.",
          "description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn more](https://dequeuniversity.com/rules/axe/3.1/definition-list?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "dlitem": {
      "id": "dlitem",
        "title": "Definition list items are wrapped in `<dl>` elements",
          "description": "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn more](https://dequeuniversity.com/rules/axe/3.1/dlitem?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "document-title": {
      "id": "document-title",
        "title": "Document has a `<title>` element",
          "description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/title).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "duplicate-id": {
      "id": "duplicate-id",
        "title": "`[id]` attributes on the page are unique",
          "description": "The value of an id attribute must be unique to prevent other instances from being overlooked by assistive technologies. [Learn more](https://dequeuniversity.com/rules/axe/3.1/duplicate-id?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "frame-title": {
      "id": "frame-title",
        "title": "`<frame>` or `<iframe>` elements have a title",
          "description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more](https://dequeuniversity.com/rules/axe/3.1/frame-title?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "html-has-lang": {
      "id": "html-has-lang",
        "title": "`<html>` element has a `[lang]` attribute",
          "description": "If a page doesn't specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more](https://dequeuniversity.com/rules/axe/3.1/html-has-lang?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "html-lang-valid": {
      "id": "html-lang-valid",
        "title": "`<html>` element has a valid value for its `[lang]` attribute",
          "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn more](https://dequeuniversity.com/rules/axe/3.1/valid-lang?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "image-alt": {
      "id": "image-alt",
        "title": "Image elements do not have `[alt]` attributes",
          "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more](https://dequeuniversity.com/rules/axe/3.1/image-alt?application=lighthouse).",
            "score": 0,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [
            {
              "key": "node",
              "itemType": "node",
              "text": "Failing Elements"
            }
          ],
            "items": [
              {
                "node": {
                  "type": "node",
                  "selector": ".main-nav-flex > .logo[data-aa-header-logo=\"Logo\\ Not\\ Set\"][href$=\"redcross\\.org\\/\"] > img",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,A,0,IMG",
                  "snippet": "<img src=\"/content/dam/redcross/imported-images/redcross-logo.png.img.png\">",
                  "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "img"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(6) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav-image.secondary-nav > a > img",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,5,DIV,0,DIV,1,DIV,0,DIV,3,NAV,0,A,0,IMG",
                  "snippet": "<img src=\"/content/dam/redcross/megamenu-assets/Holiday_fire_safety_255x217.jpg.img.jpeg\">",
                  "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "img"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mobile-bottom > .background-image",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,IMG",
                  "snippet": "<img class=\"background-image\" data-large-img=\"/content/dam/redcross/homepage-assets/fdr-banners/holiday/2019/Holiday-2019-desktop-fx.jpg.transform/1024/q70/feature/image.jpeg\" data-mobile-img=\"/content/dam/redcross/homepage-assets/fdr-banners/holiday/2019/249101-04-Holiday-2019-RCO-A-spot-Mobile-1534x1678-FINAL.jpg.transform/768/q70/feature/image.jpeg\" src=\"/content/dam/redcross/homepage-assets/fdr-banners/holiday/2019/Holiday-2019-desktop-fx.jpg.transform/1024/q70/feature/image.jpeg\" srcset=\"/content/dam/redcross/homepage-assets/fdr-banners/holiday/2019/Holiday-2019-desktop-fx.jpg.transform/1024/q70/feature/image.jpeg\">",
                  "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "img"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".slick-current > .icon-card-main.padding-container > .container-flex > .icon.container-flex > .icon-link > a > .icon-image",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,DIV,3,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,A,0,IMG",
                  "snippet": "<img class=\"icon-image\" src=\"/content/dam/redcross/post-launch-widen/Family-Four-1000x1000-G-Pl.png.img.png\">",
                  "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "img"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": "div[data-slick-index=\"\\31 \"] > .icon-card-main.padding-container > .container-flex > .icon.container-flex > .icon-link > a > .icon-image",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,DIV,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,A,0,IMG",
                  "snippet": "<img class=\"icon-image\" src=\"/content/dam/redcross/post-launch-widen/Blood-Bag-Cross-1000x1000-G-Pl.png.img.png\">",
                  "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "img"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": "div[data-slick-index=\"\\32 \"] > .icon-card-main.padding-container > .container-flex > .icon.container-flex > .icon-link > a > .icon-image",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,DIV,5,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,A,0,IMG",
                  "snippet": "<img class=\"icon-image\" src=\"/content/dam/redcross/post-launch-widen/Globe-Countries-1000x1000-G-Pl.png.img.png\">",
                  "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "img"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".list-item.col-md-4.mr-auto:nth-child(1) > a[data-aa-hero-image=\"hero\\ image\\ not\\ set\"] > .list-item-row.row > .icon",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,6,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,2,DIV,0,DIV,0,A,0,DIV,0,IMG",
                  "snippet": "<img class=\"icon\" src=\"/content/dam/icons/biomed/Blood-Drop-1000x1000-W-RC.png.transform/282/q70/feature/image.png\">",
                  "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "img"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".list-item.col-md-4.mr-auto:nth-child(2) > a[data-aa-hero-image=\"hero\\ image\\ not\\ set\"] > .list-item-row.row > .icon",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,6,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,2,DIV,1,DIV,0,A,0,DIV,0,IMG",
                  "snippet": "<img class=\"icon\" src=\"/content/dam/icons/disaster-services/erv/ERV-1000x1000-W-RC.png.transform/282/q70/feature/image.png\">",
                  "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "img"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".list-item.col-md-4.mr-auto:nth-child(3) > a[data-aa-hero-image=\"hero\\ image\\ not\\ set\"] > .list-item-row.row > .icon",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,6,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,2,DIV,2,DIV,0,A,0,DIV,0,IMG",
                  "snippet": "<img class=\"icon\" src=\"/content/dam/icons/digital-icons/heart/Heart-1000x1000-W-RC.png.transform/282/q70/feature/image.png\">",
                  "explanation": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "img"
                }
              }
            ],
              "debugData": {
          "type": "debugdata",
            "impact": "critical",
              "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag111",
                "section508",
                "section508.22.a"
              ]
        }
      }
    },
    "input-image-alt": {
      "id": "input-image-alt",
        "title": "`<input type=\"image\">` elements have `[alt]` text",
          "description": "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn more](https://dequeuniversity.com/rules/axe/3.1/input-image-alt?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "label": {
      "id": "label",
        "title": "Form elements do not have associated labels",
          "description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more](https://dequeuniversity.com/rules/axe/3.1/label?application=lighthouse).",
            "score": 0,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [
            {
              "key": "node",
              "itemType": "node",
              "text": "Failing Elements"
            }
          ],
            "items": [
              {
                "node": {
                  "type": "node",
                  "selector": "#find-a-drive-zip",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,DIV,2,DIV,0,DIV,1,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,FORM,0,INPUT",
                  "snippet": "<input id=\"find-a-drive-zip\" placeholder=\"Zip Code\" pattern=\"[0-9]{5}\" maxlength=\"5\" type=\"tel\">",
                  "explanation": "Fix any of the following:\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Form element does not have an implicit (wrapped) <label>\n  Form element does not have an explicit <label>\n  Element has no title attribute or the title attribute is empty",
                  "nodeLabel": "input"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": "select",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,3,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,FORM,0,DIV,0,FIELDSET,0,DIV,0,DIV,0,DIV,0,SELECT",
                  "snippet": "<select class=\"select-class cat-search\" name=\"cgid\">",
                  "explanation": "Fix any of the following:\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Form element does not have an implicit (wrapped) <label>\n  Form element does not have an explicit <label>\n  Element has no title attribute or the title attribute is empty",
                  "nodeLabel": "Select a Class Type\nFirst Aid\nCPR\nAED\nBLS/CPR for Healthcare\nBabysitting & Chil…"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": "#headernavgeolocation",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,3,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,FORM,0,DIV,0,FIELDSET,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,INPUT",
                  "snippet": "<input type=\"text\" name=\"zip\" placeholder=\"Zip Code\" class=\"geo-location geo-complete-input\" autocomplete=\"off\" id=\"headernavgeolocation\" pattern=\"[0-9]{5}\">",
                  "explanation": "Fix any of the following:\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Form element does not have an implicit (wrapped) <label>\n  Form element does not have an explicit <label>\n  Element has no title attribute or the title attribute is empty",
                  "nodeLabel": "input"
                }
              }
            ],
              "debugData": {
          "type": "debugdata",
            "impact": "critical",
              "tags": [
                "cat.forms",
                "wcag2a",
                "wcag332",
                "wcag131",
                "section508",
                "section508.22.n"
              ]
        }
      }
    },
    "layout-table": {
      "id": "layout-table",
        "title": "Presentational `<table>` elements avoid using `<th>`, `<caption>` or the `[summary]` attribute.",
          "description": "A table being used for layout purposes should not include data elements, such as the th or caption elements or the summary attribute, because this can create a confusing experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/layout-table?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "link-name": {
      "id": "link-name",
        "title": "Links do not have a discernible name",
          "description": "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/link-name?application=lighthouse).",
            "score": 0,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [
            {
              "key": "node",
              "itemType": "node",
              "text": "Failing Elements"
            }
          ],
            "items": [
              {
                "node": {
                  "type": "node",
                  "selector": ".main-nav-flex > .logo[data-aa-header-logo=\"Logo\\ Not\\ Set\"][href$=\"redcross\\.org\\/\"]",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,A",
                  "snippet": "<a data-aa-header-logo=\"Logo Not Set\" href=\"https://www.redcross.org/\" target=\"_self\" class=\"logo\">\n\t<img src=\"/content/dam/redcross/imported-images/redcross-logo.png.img.png\">\n</a>",
                  "explanation": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "a"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".slick-current > .icon-card-main.padding-container > .container-flex > .icon.container-flex > .icon-link > a",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,DIV,3,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,A",
                  "snippet": "<a href=\"https://www.redcross.org/about-us/news-and-events/news/2019/red-cross-locates-a-long-lost-sister-and-best-friend.html\" tabindex=\"0\">\n                    <img class=\"icon-image\" src=\"/content/dam/redcross/post-launch-widen/Family-Four-1000x1000-G-Pl.png.img.png\">\n                </a>",
                  "explanation": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "a"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": "div[data-slick-index=\"\\31 \"] > .icon-card-main.padding-container > .container-flex > .icon.container-flex > .icon-link > a",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,DIV,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,A",
                  "snippet": "<a href=\"https://www.redcross.org/about-us/news-and-events/news/2019/generous-gift-of-blood-donations-helps-keep-the-holidays-merry-and-bright.html\" tabindex=\"0\">",
                  "explanation": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "a"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": "div[data-slick-index=\"\\32 \"] > .icon-card-main.padding-container > .container-flex > .icon.container-flex > .icon-link > a",
                  "path": "1,HTML,8,BODY,5,MAIN,2,DIV,4,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,DIV,5,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,A",
                  "snippet": "<a href=\"https://www.redcross.org/about-us/news-and-events/news/2019/el-salvador-kid-heroes-practice-disaster-skills.html\" tabindex=\"0\">\n                    <img class=\"icon-image\" src=\"/content/dam/redcross/post-launch-widen/Globe-Countries-1000x1000-G-Pl.png.img.png\">\n                </a>",
                  "explanation": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"",
                  "nodeLabel": "a"
                }
              }
            ],
              "debugData": {
          "type": "debugdata",
            "impact": "serious",
              "tags": [
                "cat.name-role-value",
                "wcag2a",
                "wcag412",
                "wcag244",
                "section508",
                "section508.22.a"
              ]
        }
      }
    },
    "list": {
      "id": "list",
        "title": "Lists do not contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
          "description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more](https://dequeuniversity.com/rules/axe/3.1/list?application=lighthouse).",
            "score": 0,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [
            {
              "key": "node",
              "itemType": "node",
              "text": "Failing Elements"
            }
          ],
            "items": [
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(1) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav:nth-child(1) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,0,DIV,0,DIV,1,DIV,0,DIV,0,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Ways to Donate Money\nDonate Online\nStock Transfer\nMonthly Gifts\nText, Mail, Or …"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(1) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav:nth-child(2) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,0,DIV,0,DIV,1,DIV,0,DIV,1,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Where Your Money Goes\nYour Gift Matters\nHome Fire Campaign\nCurrent Relief Effor…"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(1) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav:nth-child(3) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,0,DIV,0,DIV,1,DIV,0,DIV,2,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Companies & Foundations\nGet Started\nPartnership Opportunities\nOur Corporate Par…"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(2) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav:nth-child(1) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,1,DIV,0,DIV,1,DIV,0,DIV,0,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "How to Donate\nFind a Blood Drive\nEligibility Requirements\nTypes of Blood Donati…"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(2) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav:nth-child(2) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,1,DIV,0,DIV,1,DIV,0,DIV,1,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Blood Donation Process\nDonation Process Overview\nWhat to do Before, During and …"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(2) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav:nth-child(3) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,1,DIV,0,DIV,1,DIV,0,DIV,2,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Learn About Hosting\nWhy Host a Blood Drive?\nHow Hosting a Blood Drive Works\nHos…"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".dropdown-double > .secondary-nav-container > .secondary-nav:nth-child(1) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,2,DIV,0,DIV,1,DIV,0,DIV,0,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Find Classes & Certification\nFirst Aid\nCPR\nAED\nBLS/CPR For Healthcare\nALS/PALS\n…"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".dropdown-double > .secondary-nav-container > .secondary-nav:nth-child(2) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,2,DIV,0,DIV,1,DIV,0,DIV,1,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Shop Supplies & Products\nTraining Supplies\nBooks & DVDs\nLifeguarding & Learn to…"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(4) > .main-nav-section[data-context=\"main-nav-section\"] > .dropdown > .secondary-nav-container > .secondary-nav > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,3,DIV,0,DIV,1,DIV,0,DIV,0,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Become a Volunteer\nVolunteer Opportunities\nVolunteer to Sound the Alarm\nSign In…"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(5) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav:nth-child(1) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,4,DIV,0,DIV,1,DIV,0,DIV,0,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Our Work\nDisaster Relief\nLifesaving Blood\nTraining & Certification\nMilitary Fam…"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(5) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav:nth-child(2) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,4,DIV,0,DIV,1,DIV,0,DIV,1,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Who We Are\nMission & Values\nLeadership\nGovernance\nHistory\nNursing & Health\nRed …"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(5) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav:nth-child(3) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,4,DIV,0,DIV,1,DIV,0,DIV,2,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "News & Events\nLatest News\nPublications\nMedia Resources\nConnect with Us"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".secondary-nav:nth-child(4) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,4,DIV,0,DIV,1,DIV,0,DIV,3,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Careers\nCareer Opportunities\nCulture & Values\nBenefits\nUniversity Programs"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(6) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav:nth-child(1) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,5,DIV,0,DIV,1,DIV,0,DIV,0,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Disaster Relief & Recovery Services\nFind an Open Shelter\nContact & Locate Loved…"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(6) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav:nth-child(2) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,5,DIV,0,DIV,1,DIV,0,DIV,1,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "How to Prepare for Emergencies\nWorkplaces & Organizations\nEmergency Preparednes…"
                }
              },
              {
                "node": {
                  "type": "node",
                  "selector": ".mainnavsection.parbase:nth-child(6) > .main-nav-section.wide[data-context=\"main-nav-section\"] > .dropdown-wide.dropdown > .secondary-nav-container > .secondary-nav:nth-child(3) > .secondary-links-container",
                  "path": "1,HTML,8,BODY,2,HEADER,0,DIV,2,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,2,NAV,5,DIV,0,DIV,1,DIV,0,DIV,2,NAV,0,UL",
                  "snippet": "<ul class=\"secondary-links-container\">",
                  "explanation": "Fix all of the following:\n  List element has direct children that are not allowed inside <li> elements",
                  "nodeLabel": "Military Families\nEmergency Communication\nFinancial Assistance\nDeployment\nInfor…"
                }
              }
            ],
              "debugData": {
          "type": "debugdata",
            "impact": "serious",
              "tags": [
                "cat.structure",
                "wcag2a",
                "wcag131"
              ]
        }
      }
    },
    "listitem": {
      "id": "listitem",
        "title": "List items (`<li>`) are contained within `<ul>` or `<ol>` parent elements",
          "description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>` or `<ol>` to be announced properly. [Learn more](https://dequeuniversity.com/rules/axe/3.1/listitem?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "meta-refresh": {
      "id": "meta-refresh",
        "title": "The document does not use `<meta http-equiv=\"refresh\">`",
          "description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more](https://dequeuniversity.com/rules/axe/3.1/meta-refresh?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "meta-viewport": {
      "id": "meta-viewport",
        "title": "`[user-scalable=\"no\"]` is not used in the `<meta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.",
          "description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more](https://dequeuniversity.com/rules/axe/3.1/meta-viewport?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "object-alt": {
      "id": "object-alt",
        "title": "`<object>` elements have `[alt]` text",
          "description": "Screen readers cannot translate non-text content. Adding alt text to `<object>` elements helps screen readers convey meaning to users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/object-alt?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "tabindex": {
      "id": "tabindex",
        "title": "No element has a `[tabindex]` value greater than 0",
          "description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more](https://dequeuniversity.com/rules/axe/3.1/tabindex?application=lighthouse).",
            "score": 1,
              "scoreDisplayMode": "binary",
                "details": {
        "type": "table",
          "headings": [],
            "items": []
      }
    },
    "td-headers-attr": {
      "id": "td-headers-attr",
        "title": "Cells in a `<table>` element that use the `[headers]` attribute only refer to other cells of that same table.",
          "description": "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/td-headers-attr?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "th-has-data-cells": {
      "id": "th-has-data-cells",
        "title": "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
          "description": "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/3.1/th-has-data-cells?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "valid-lang": {
      "id": "valid-lang",
        "title": "`[lang]` attributes have a valid value",
          "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn more](https://dequeuniversity.com/rules/axe/3.1/valid-lang?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "video-caption": {
      "id": "video-caption",
        "title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
          "description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more](https://dequeuniversity.com/rules/axe/3.1/video-caption?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "video-description": {
      "id": "video-description",
        "title": "`<video>` elements contain a `<track>` element with `[kind=\"description\"]`",
          "description": "Audio descriptions provide relevant information for videos that dialogue cannot, such as facial expressions and scenes. [Learn more](https://dequeuniversity.com/rules/axe/3.1/video-description?application=lighthouse).",
            "score": null,
              "scoreDisplayMode": "notApplicable"
    },
    "custom-controls-labels": {
      "id": "custom-controls-labels",
        "title": "Custom controls have associated labels",
          "description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).",
            "score": null,
              "scoreDisplayMode": "manual"
    },
    "custom-controls-roles": {
      "id": "custom-controls-roles",
        "title": "Custom controls have ARIA roles",
          "description": "Custom interactive controls have appropriate ARIA roles. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).",
            "score": null,
              "scoreDisplayMode": "manual"
    },
    "focus-traps": {
      "id": "focus-traps",
        "title": "User focus is not accidentally trapped in a region",
          "description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).",
            "score": null,
              "scoreDisplayMode": "manual"
    },
    "focusable-controls": {
      "id": "focusable-controls",
        "title": "Interactive controls are keyboard focusable",
          "description": "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).",
            "score": null,
              "scoreDisplayMode": "manual"
    },
    "heading-levels": {
      "id": "heading-levels",
        "title": "Headings don't skip levels",
          "description": "Headings are used to create an outline for the page and heading levels are not skipped. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#take_advantage_of_headings_and_landmarks).",
            "score": null,
              "scoreDisplayMode": "manual"
    },
    "interactive-element-affordance": {
      "id": "interactive-element-affordance",
        "title": "Interactive elements indicate their purpose and state",
          "description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#interactive_elements_like_links_and_buttons_should_indicate_their_purpose_and_state).",
            "score": null,
              "scoreDisplayMode": "manual"
    },
    "logical-tab-order": {
      "id": "logical-tab-order",
        "title": "The page has a logical tab order",
          "description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).",
            "score": null,
              "scoreDisplayMode": "manual"
    },
    "managed-focus": {
      "id": "managed-focus",
        "title": "The user's focus is directed to new content added to the page",
          "description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).",
            "score": null,
              "scoreDisplayMode": "manual"
    },
    "offscreen-content-hidden": {
      "id": "offscreen-content-hidden",
        "title": "Offscreen content is hidden from assistive technology",
          "description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).",
            "score": null,
              "scoreDisplayMode": "manual"
    },
    "use-landmarks": {
      "id": "use-landmarks",
        "title": "HTML5 landmark elements are used to improve navigation",
          "description": "Landmark elements (<main>, <nav>, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#take_advantage_of_headings_and_landmarks).",
            "score": null,
              "scoreDisplayMode": "manual"
    },
    "visual-order-follows-dom": {
      "id": "visual-order-follows-dom",
        "title": "Visual order on the page follows DOM order",
          "description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).",
            "score": null,
              "scoreDisplayMode": "manual"
    }
  },
  "configSettings": {
    "output": "json",
      "maxWaitForFcp": 15000,
        "maxWaitForLoad": 45000,
          "throttlingMethod": "simulate",
            "throttling": {
      "rttMs": 150,
        "throughputKbps": 1638.4,
          "requestLatencyMs": 562.5,
            "downloadThroughputKbps": 1474.5600000000002,
              "uploadThroughputKbps": 675,
                "cpuSlowdownMultiplier": 4
    },
    "auditMode": false,
      "gatherMode": false,
        "disableStorageReset": false,
          "emulatedFormFactor": "desktop",
            "deviceScreenEmulationMethod": "provided",
              "channel": "devtools",
                "budgets": null,
                  "locale": "en-US",
                    "blockedUrlPatterns": null,
                      "additionalTraceCategories": null,
                        "extraHeaders": null,
                          "precomputedLanternData": null,
                            "onlyAudits": null,
                              "onlyCategories": [
                                "accessibility"
                              ],
                                "skipAudits": null
  },
  "categories": {
    "accessibility": {
      "title": "Accessibility",
        "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://developers.google.com/web/fundamentals/accessibility). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.",
          "manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review).",
            "auditRefs": [
              {
                "id": "accesskeys",
                "weight": 0,
                "group": "a11y-navigation"
              },
              {
                "id": "aria-allowed-attr",
                "weight": 10,
                "group": "a11y-aria"
              },
              {
                "id": "aria-required-attr",
                "weight": 10,
                "group": "a11y-aria"
              },
              {
                "id": "aria-required-children",
                "weight": 10,
                "group": "a11y-aria"
              },
              {
                "id": "aria-required-parent",
                "weight": 10,
                "group": "a11y-aria"
              },
              {
                "id": "aria-roles",
                "weight": 10,
                "group": "a11y-aria"
              },
              {
                "id": "aria-valid-attr-value",
                "weight": 10,
                "group": "a11y-aria"
              },
              {
                "id": "aria-valid-attr",
                "weight": 10,
                "group": "a11y-aria"
              },
              {
                "id": "audio-caption",
                "weight": 0,
                "group": "a11y-audio-video"
              },
              {
                "id": "button-name",
                "weight": 10,
                "group": "a11y-names-labels"
              },
              {
                "id": "bypass",
                "weight": 3,
                "group": "a11y-navigation"
              },
              {
                "id": "color-contrast",
                "weight": 3,
                "group": "a11y-color-contrast"
              },
              {
                "id": "definition-list",
                "weight": 0,
                "group": "a11y-tables-lists"
              },
              {
                "id": "dlitem",
                "weight": 0,
                "group": "a11y-tables-lists"
              },
              {
                "id": "document-title",
                "weight": 3,
                "group": "a11y-names-labels"
              },
              {
                "id": "duplicate-id",
                "weight": 1,
                "group": "a11y-best-practices"
              },
              {
                "id": "frame-title",
                "weight": 0,
                "group": "a11y-names-labels"
              },
              {
                "id": "html-has-lang",
                "weight": 3,
                "group": "a11y-language"
              },
              {
                "id": "html-lang-valid",
                "weight": 3,
                "group": "a11y-language"
              },
              {
                "id": "image-alt",
                "weight": 10,
                "group": "a11y-names-labels"
              },
              {
                "id": "input-image-alt",
                "weight": 0,
                "group": "a11y-names-labels"
              },
              {
                "id": "label",
                "weight": 10,
                "group": "a11y-names-labels"
              },
              {
                "id": "layout-table",
                "weight": 0,
                "group": "a11y-tables-lists"
              },
              {
                "id": "link-name",
                "weight": 3,
                "group": "a11y-names-labels"
              },
              {
                "id": "list",
                "weight": 3,
                "group": "a11y-tables-lists"
              },
              {
                "id": "listitem",
                "weight": 3,
                "group": "a11y-tables-lists"
              },
              {
                "id": "meta-refresh",
                "weight": 0,
                "group": "a11y-best-practices"
              },
              {
                "id": "meta-viewport",
                "weight": 10,
                "group": "a11y-best-practices"
              },
              {
                "id": "object-alt",
                "weight": 0,
                "group": "a11y-names-labels"
              },
              {
                "id": "tabindex",
                "weight": 3,
                "group": "a11y-navigation"
              },
              {
                "id": "td-headers-attr",
                "weight": 0,
                "group": "a11y-tables-lists"
              },
              {
                "id": "th-has-data-cells",
                "weight": 0,
                "group": "a11y-tables-lists"
              },
              {
                "id": "valid-lang",
                "weight": 0,
                "group": "a11y-language"
              },
              {
                "id": "video-caption",
                "weight": 0,
                "group": "a11y-audio-video"
              },
              {
                "id": "video-description",
                "weight": 0,
                "group": "a11y-audio-video"
              },
              {
                "id": "logical-tab-order",
                "weight": 0
              },
              {
                "id": "focusable-controls",
                "weight": 0
              },
              {
                "id": "interactive-element-affordance",
                "weight": 0
              },
              {
                "id": "managed-focus",
                "weight": 0
              },
              {
                "id": "focus-traps",
                "weight": 0
              },
              {
                "id": "custom-controls-labels",
                "weight": 0
              },
              {
                "id": "custom-controls-roles",
                "weight": 0
              },
              {
                "id": "visual-order-follows-dom",
                "weight": 0
              },
              {
                "id": "offscreen-content-hidden",
                "weight": 0
              },
              {
                "id": "heading-levels",
                "weight": 0
              },
              {
                "id": "use-landmarks",
                "weight": 0
              }
            ],
              "id": "accessibility",
                "score": 0.72
    }
  },
  "categoryGroups": {
    "metrics": {
      "title": "Metrics"
    },
    "load-opportunities": {
      "title": "Opportunities",
        "description": "These suggestions can help your page load faster. They don't [directly affect](https://github.com/GoogleChrome/lighthouse/blob/d2ec9ffbb21de9ad1a0f86ed24575eda32c796f0/docs/scoring.md#how-are-the-scores-weighted) the Performance score."
    },
    "budgets": {
      "title": "Budgets",
        "description": "Performance budgets set standards for the performance of your site."
    },
    "diagnostics": {
      "title": "Diagnostics",
        "description": "More information about the performance of your application. These numbers don't [directly affect](https://github.com/GoogleChrome/lighthouse/blob/d2ec9ffbb21de9ad1a0f86ed24575eda32c796f0/docs/scoring.md#how-are-the-scores-weighted) the Performance score."
    },
    "pwa-fast-reliable": {
      "title": "Fast and reliable"
    },
    "pwa-installable": {
      "title": "Installable"
    },
    "pwa-optimized": {
      "title": "PWA Optimized"
    },
    "a11y-best-practices": {
      "title": "Best practices",
        "description": "These items highlight common accessibility best practices."
    },
    "a11y-color-contrast": {
      "title": "Contrast",
        "description": "These are opportunities to improve the legibility of your content."
    },
    "a11y-names-labels": {
      "title": "Names and labels",
        "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-navigation": {
      "title": "Navigation",
        "description": "These are opportunities to improve keyboard navigation in your application."
    },
    "a11y-aria": {
      "title": "ARIA",
        "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-language": {
      "title": "Internationalization and localization",
        "description": "These are opportunities to improve the interpretation of your content by users in different locales."
    },
    "a11y-audio-video": {
      "title": "Audio and video",
        "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
    },
    "a11y-tables-lists": {
      "title": "Tables and lists",
        "description": "These are opportunities to to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
    },
    "seo-mobile": {
      "title": "Mobile Friendly",
        "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/)."
    },
    "seo-content": {
      "title": "Content Best Practices",
        "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
    },
    "seo-crawl": {
      "title": "Crawling and Indexing",
        "description": "To appear in search results, crawlers need access to your app."
    }
  },
  "timing": {
    "entries": [
      {
        "startTime": 677.11,
        "name": "lh:init:config",
        "duration": 80.56,
        "entryType": "measure"
      },
      {
        "startTime": 679.42,
        "name": "lh:config:requireGatherers",
        "duration": 6.75,
        "entryType": "measure"
      },
      {
        "startTime": 686.3,
        "name": "lh:config:requireAudits",
        "duration": 54.14,
        "entryType": "measure"
      },
      {
        "startTime": 758.41,
        "name": "lh:init:connect",
        "duration": 0.15,
        "entryType": "measure"
      },
      {
        "startTime": 758.61,
        "name": "lh:gather:loadBlank",
        "duration": 169.08,
        "entryType": "measure"
      },
      {
        "startTime": 927.8,
        "name": "lh:gather:getVersion",
        "duration": 150.89,
        "entryType": "measure"
      },
      {
        "startTime": 1078.83,
        "name": "lh:gather:getBenchmarkIndex",
        "duration": 536.11,
        "entryType": "measure"
      },
      {
        "startTime": 1615.15,
        "name": "lh:gather:setupDriver",
        "duration": 68.85,
        "entryType": "measure"
      },
      {
        "startTime": 1684.19,
        "name": "lh:gather:loadBlank",
        "duration": 128.28,
        "entryType": "measure"
      },
      {
        "startTime": 1812.56,
        "name": "lh:gather:setupPassNetwork",
        "duration": 48,
        "entryType": "measure"
      },
      {
        "startTime": 1860.69,
        "name": "lh:gather:beforePass",
        "duration": 0.17,
        "entryType": "measure"
      },
      {
        "startTime": 1860.73,
        "name": "lh:gather:beforePass:Accessibility",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 1860.92,
        "name": "lh:gather:beginRecording",
        "duration": 0.13,
        "entryType": "measure"
      },
      {
        "startTime": 1861.18,
        "name": "lh:gather:loadPage-defaultPass",
        "duration": 6684.93,
        "entryType": "measure"
      },
      {
        "startTime": 8546.25,
        "name": "lh:gather:pass",
        "duration": 0.17,
        "entryType": "measure"
      },
      {
        "startTime": 8546.5,
        "name": "lh:gather:getDevtoolsLog",
        "duration": 19.15,
        "entryType": "measure"
      },
      {
        "startTime": 8567.86,
        "name": "lh:gather:afterPass",
        "duration": 1439.38,
        "entryType": "measure"
      },
      {
        "startTime": 8587.62,
        "name": "lh:gather:afterPass:Accessibility",
        "duration": 1419.27,
        "entryType": "measure"
      },
      {
        "startTime": 10089.27,
        "name": "lh:gather:disconnect",
        "duration": 143.58,
        "entryType": "measure"
      },
      {
        "startTime": 757.88,
        "name": "lh:runner:run",
        "duration": 9734.52,
        "entryType": "measure"
      },
      {
        "startTime": 10233.1,
        "name": "lh:runner:auditing",
        "duration": 257.88,
        "entryType": "measure"
      },
      {
        "startTime": 10306.01,
        "name": "lh:audit:accesskeys",
        "duration": 0.93,
        "entryType": "measure"
      },
      {
        "startTime": 10307.27,
        "name": "lh:audit:aria-allowed-attr",
        "duration": 23.5,
        "entryType": "measure"
      },
      {
        "startTime": 10331.09,
        "name": "lh:audit:aria-required-attr",
        "duration": 0.81,
        "entryType": "measure"
      },
      {
        "startTime": 10332.43,
        "name": "lh:audit:aria-required-children",
        "duration": 0.55,
        "entryType": "measure"
      },
      {
        "startTime": 10333.4,
        "name": "lh:audit:aria-required-parent",
        "duration": 0.59,
        "entryType": "measure"
      },
      {
        "startTime": 10334.18,
        "name": "lh:audit:aria-roles",
        "duration": 0.77,
        "entryType": "measure"
      },
      {
        "startTime": 10335.16,
        "name": "lh:audit:aria-valid-attr-value",
        "duration": 0.84,
        "entryType": "measure"
      },
      {
        "startTime": 10336.49,
        "name": "lh:audit:aria-valid-attr",
        "duration": 2.58,
        "entryType": "measure"
      },
      {
        "startTime": 10340.6,
        "name": "lh:audit:audio-caption",
        "duration": 0.29,
        "entryType": "measure"
      },
      {
        "startTime": 10341.1,
        "name": "lh:audit:button-name",
        "duration": 0.54,
        "entryType": "measure"
      },
      {
        "startTime": 10342.45,
        "name": "lh:audit:bypass",
        "duration": 0.58,
        "entryType": "measure"
      },
      {
        "startTime": 10343.26,
        "name": "lh:audit:color-contrast",
        "duration": 0.55,
        "entryType": "measure"
      },
      {
        "startTime": 10344.08,
        "name": "lh:audit:definition-list",
        "duration": 0.53,
        "entryType": "measure"
      },
      {
        "startTime": 10345.31,
        "name": "lh:audit:dlitem",
        "duration": 53.45,
        "entryType": "measure"
      },
      {
        "startTime": 10416.35,
        "name": "lh:audit:document-title",
        "duration": 10.79,
        "entryType": "measure"
      },
      {
        "startTime": 10429.64,
        "name": "lh:audit:duplicate-id",
        "duration": 3.24,
        "entryType": "measure"
      },
      {
        "startTime": 10433.49,
        "name": "lh:audit:frame-title",
        "duration": 0.55,
        "entryType": "measure"
      },
      {
        "startTime": 10434.24,
        "name": "lh:audit:html-has-lang",
        "duration": 0.72,
        "entryType": "measure"
      },
      {
        "startTime": 10435.22,
        "name": "lh:audit:html-lang-valid",
        "duration": 0.91,
        "entryType": "measure"
      },
      {
        "startTime": 10437.1,
        "name": "lh:audit:image-alt",
        "duration": 22.6,
        "entryType": "measure"
      },
      {
        "startTime": 10460.54,
        "name": "lh:audit:input-image-alt",
        "duration": 0.37,
        "entryType": "measure"
      },
      {
        "startTime": 10461.07,
        "name": "lh:audit:label",
        "duration": 0.74,
        "entryType": "measure"
      },
      {
        "startTime": 10462.04,
        "name": "lh:audit:layout-table",
        "duration": 1.88,
        "entryType": "measure"
      },
      {
        "startTime": 10464.83,
        "name": "lh:audit:link-name",
        "duration": 3.17,
        "entryType": "measure"
      },
      {
        "startTime": 10468.25,
        "name": "lh:audit:list",
        "duration": 0.47,
        "entryType": "measure"
      },
      {
        "startTime": 10470.36,
        "name": "lh:audit:listitem",
        "duration": 0.55,
        "entryType": "measure"
      },
      {
        "startTime": 10471.22,
        "name": "lh:audit:meta-refresh",
        "duration": 0.59,
        "entryType": "measure"
      },
      {
        "startTime": 10475.75,
        "name": "lh:audit:meta-viewport",
        "duration": 2.02,
        "entryType": "measure"
      },
      {
        "startTime": 10478.03,
        "name": "lh:audit:object-alt",
        "duration": 0.29,
        "entryType": "measure"
      },
      {
        "startTime": 10478.49,
        "name": "lh:audit:tabindex",
        "duration": 1.71,
        "entryType": "measure"
      },
      {
        "startTime": 10480.5,
        "name": "lh:audit:td-headers-attr",
        "duration": 0.32,
        "entryType": "measure"
      },
      {
        "startTime": 10481.64,
        "name": "lh:audit:th-has-data-cells",
        "duration": 0.98,
        "entryType": "measure"
      },
      {
        "startTime": 10482.81,
        "name": "lh:audit:valid-lang",
        "duration": 0.77,
        "entryType": "measure"
      },
      {
        "startTime": 10483.78,
        "name": "lh:audit:video-caption",
        "duration": 2.89,
        "entryType": "measure"
      },
      {
        "startTime": 10487.24,
        "name": "lh:audit:video-description",
        "duration": 1.43,
        "entryType": "measure"
      },
      {
        "startTime": 10488.74,
        "name": "lh:audit:custom-controls-labels",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 10488.96,
        "name": "lh:audit:custom-controls-roles",
        "duration": 1.21,
        "entryType": "measure"
      },
      {
        "startTime": 10490.21,
        "name": "lh:audit:focus-traps",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 10490.33,
        "name": "lh:audit:focusable-controls",
        "duration": 0.07,
        "entryType": "measure"
      },
      {
        "startTime": 10490.42,
        "name": "lh:audit:heading-levels",
        "duration": 0.07,
        "entryType": "measure"
      },
      {
        "startTime": 10490.5,
        "name": "lh:audit:interactive-element-affordance",
        "duration": 0.06,
        "entryType": "measure"
      },
      {
        "startTime": 10490.57,
        "name": "lh:audit:logical-tab-order",
        "duration": 0.09,
        "entryType": "measure"
      },
      {
        "startTime": 10490.67,
        "name": "lh:audit:managed-focus",
        "duration": 0.06,
        "entryType": "measure"
      },
      {
        "startTime": 10490.73,
        "name": "lh:audit:offscreen-content-hidden",
        "duration": 0.06,
        "entryType": "measure"
      },
      {
        "startTime": 10490.81,
        "name": "lh:audit:use-landmarks",
        "duration": 0.08,
        "entryType": "measure"
      },
      {
        "startTime": 10490.91,
        "name": "lh:audit:visual-order-follows-dom",
        "duration": 0.05,
        "entryType": "measure"
      },
      {
        "startTime": 10490.99,
        "name": "lh:runner:generate",
        "duration": 1.39,
        "entryType": "measure"
      }
    ],
      "total": 9734.52
  },
  "i18n": {
    "rendererFormattedStrings": {
      "auditGroupExpandTooltip": "Show audits",
        "crcInitialNavigation": "Initial Navigation",
          "crcLongestDurationLabel": "Maximum critical path latency:",
            "errorLabel": "Error!",
              "errorMissingAuditInfo": "Report error: no audit information",
                "labDataTitle": "Lab Data",
                  "lsPerformanceCategoryDescription": "[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",
                    "manualAuditsGroupTitle": "Additional items to manually check",
                      "notApplicableAuditsGroupTitle": "Not applicable",
                        "opportunityResourceColumnLabel": "Opportunity",
                          "opportunitySavingsColumnLabel": "Estimated Savings",
                            "passedAuditsGroupTitle": "Passed audits",
                              "snippetCollapseButtonLabel": "Collapse snippet",
                                "snippetExpandButtonLabel": "Expand snippet",
                                  "thirdPartyResourcesLabel": "Show 3rd-party resources",
                                    "toplevelWarningsMessage": "There were issues affecting this run of Lighthouse:",
                                      "varianceDisclaimer": "Values are estimated and may vary. The performance score is [based only on these metrics](https://github.com/GoogleChrome/lighthouse/blob/d2ec9ffbb21de9ad1a0f86ed24575eda32c796f0/docs/scoring.md#how-are-the-scores-weighted).",
                                        "warningAuditsGroupTitle": "Passed audits but with warnings",
                                          "warningHeader": "Warnings: "
    },
    "icuMessagePaths": {
      "lighthouse-core/audits/accessibility/accesskeys.js | title": [
        "audits.accesskeys.title"
      ],
        "lighthouse-core/audits/accessibility/accesskeys.js | description": [
          "audits.accesskeys.description"
        ],
          "lighthouse-core/audits/accessibility/aria-allowed-attr.js | title": [
            "audits[aria-allowed-attr].title"
          ],
            "lighthouse-core/audits/accessibility/aria-allowed-attr.js | description": [
              "audits[aria-allowed-attr].description"
            ],
              "lighthouse-core/audits/accessibility/aria-required-attr.js | title": [
                "audits[aria-required-attr].title"
              ],
                "lighthouse-core/audits/accessibility/aria-required-attr.js | description": [
                  "audits[aria-required-attr].description"
                ],
                  "lighthouse-core/audits/accessibility/aria-required-children.js | title": [
                    "audits[aria-required-children].title"
                  ],
                    "lighthouse-core/audits/accessibility/aria-required-children.js | description": [
                      "audits[aria-required-children].description"
                    ],
                      "lighthouse-core/audits/accessibility/aria-required-parent.js | title": [
                        "audits[aria-required-parent].title"
                      ],
                        "lighthouse-core/audits/accessibility/aria-required-parent.js | description": [
                          "audits[aria-required-parent].description"
                        ],
                          "lighthouse-core/audits/accessibility/aria-roles.js | title": [
                            "audits[aria-roles].title"
                          ],
                            "lighthouse-core/audits/accessibility/aria-roles.js | description": [
                              "audits[aria-roles].description"
                            ],
                              "lighthouse-core/audits/accessibility/aria-valid-attr-value.js | failureTitle": [
                                "audits[aria-valid-attr-value].title"
                              ],
                                "lighthouse-core/audits/accessibility/aria-valid-attr-value.js | description": [
                                  "audits[aria-valid-attr-value].description"
                                ],
                                  "lighthouse-core/audits/accessibility/axe-audit.js | failingElementsHeader": [
                                    "audits[aria-valid-attr-value].details.headings[0].text",
                                    "audits[color-contrast].details.headings[0].text",
                                    "audits[image-alt].details.headings[0].text",
                                    "audits.label.details.headings[0].text",
                                    "audits[link-name].details.headings[0].text",
                                    "audits.list.details.headings[0].text"
                                  ],
                                    "lighthouse-core/audits/accessibility/aria-valid-attr.js | title": [
                                      "audits[aria-valid-attr].title"
                                    ],
                                      "lighthouse-core/audits/accessibility/aria-valid-attr.js | description": [
                                        "audits[aria-valid-attr].description"
                                      ],
                                        "lighthouse-core/audits/accessibility/audio-caption.js | title": [
                                          "audits[audio-caption].title"
                                        ],
                                          "lighthouse-core/audits/accessibility/audio-caption.js | description": [
                                            "audits[audio-caption].description"
                                          ],
                                            "lighthouse-core/audits/accessibility/button-name.js | title": [
                                              "audits[button-name].title"
                                            ],
                                              "lighthouse-core/audits/accessibility/button-name.js | description": [
                                                "audits[button-name].description"
                                              ],
                                                "lighthouse-core/audits/accessibility/bypass.js | title": [
                                                  "audits.bypass.title"
                                                ],
                                                  "lighthouse-core/audits/accessibility/bypass.js | description": [
                                                    "audits.bypass.description"
                                                  ],
                                                    "lighthouse-core/audits/accessibility/color-contrast.js | failureTitle": [
                                                      "audits[color-contrast].title"
                                                    ],
                                                      "lighthouse-core/audits/accessibility/color-contrast.js | description": [
                                                        "audits[color-contrast].description"
                                                      ],
                                                        "lighthouse-core/audits/accessibility/definition-list.js | title": [
                                                          "audits[definition-list].title"
                                                        ],
                                                          "lighthouse-core/audits/accessibility/definition-list.js | description": [
                                                            "audits[definition-list].description"
                                                          ],
                                                            "lighthouse-core/audits/accessibility/dlitem.js | title": [
                                                              "audits.dlitem.title"
                                                            ],
                                                              "lighthouse-core/audits/accessibility/dlitem.js | description": [
                                                                "audits.dlitem.description"
                                                              ],
                                                                "lighthouse-core/audits/accessibility/document-title.js | title": [
                                                                  "audits[document-title].title"
                                                                ],
                                                                  "lighthouse-core/audits/accessibility/document-title.js | description": [
                                                                    "audits[document-title].description"
                                                                  ],
                                                                    "lighthouse-core/audits/accessibility/duplicate-id.js | title": [
                                                                      "audits[duplicate-id].title"
                                                                    ],
                                                                      "lighthouse-core/audits/accessibility/duplicate-id.js | description": [
                                                                        "audits[duplicate-id].description"
                                                                      ],
                                                                        "lighthouse-core/audits/accessibility/frame-title.js | title": [
                                                                          "audits[frame-title].title"
                                                                        ],
                                                                          "lighthouse-core/audits/accessibility/frame-title.js | description": [
                                                                            "audits[frame-title].description"
                                                                          ],
                                                                            "lighthouse-core/audits/accessibility/html-has-lang.js | title": [
                                                                              "audits[html-has-lang].title"
                                                                            ],
                                                                              "lighthouse-core/audits/accessibility/html-has-lang.js | description": [
                                                                                "audits[html-has-lang].description"
                                                                              ],
                                                                                "lighthouse-core/audits/accessibility/html-lang-valid.js | title": [
                                                                                  "audits[html-lang-valid].title"
                                                                                ],
                                                                                  "lighthouse-core/audits/accessibility/html-lang-valid.js | description": [
                                                                                    "audits[html-lang-valid].description"
                                                                                  ],
                                                                                    "lighthouse-core/audits/accessibility/image-alt.js | failureTitle": [
                                                                                      "audits[image-alt].title"
                                                                                    ],
                                                                                      "lighthouse-core/audits/accessibility/image-alt.js | description": [
                                                                                        "audits[image-alt].description"
                                                                                      ],
                                                                                        "lighthouse-core/audits/accessibility/input-image-alt.js | title": [
                                                                                          "audits[input-image-alt].title"
                                                                                        ],
                                                                                          "lighthouse-core/audits/accessibility/input-image-alt.js | description": [
                                                                                            "audits[input-image-alt].description"
                                                                                          ],
                                                                                            "lighthouse-core/audits/accessibility/label.js | failureTitle": [
                                                                                              "audits.label.title"
                                                                                            ],
                                                                                              "lighthouse-core/audits/accessibility/label.js | description": [
                                                                                                "audits.label.description"
                                                                                              ],
                                                                                                "lighthouse-core/audits/accessibility/layout-table.js | title": [
                                                                                                  "audits[layout-table].title"
                                                                                                ],
                                                                                                  "lighthouse-core/audits/accessibility/layout-table.js | description": [
                                                                                                    "audits[layout-table].description"
                                                                                                  ],
                                                                                                    "lighthouse-core/audits/accessibility/link-name.js | failureTitle": [
                                                                                                      "audits[link-name].title"
                                                                                                    ],
                                                                                                      "lighthouse-core/audits/accessibility/link-name.js | description": [
                                                                                                        "audits[link-name].description"
                                                                                                      ],
                                                                                                        "lighthouse-core/audits/accessibility/list.js | failureTitle": [
                                                                                                          "audits.list.title"
                                                                                                        ],
                                                                                                          "lighthouse-core/audits/accessibility/list.js | description": [
                                                                                                            "audits.list.description"
                                                                                                          ],
                                                                                                            "lighthouse-core/audits/accessibility/listitem.js | title": [
                                                                                                              "audits.listitem.title"
                                                                                                            ],
                                                                                                              "lighthouse-core/audits/accessibility/listitem.js | description": [
                                                                                                                "audits.listitem.description"
                                                                                                              ],
                                                                                                                "lighthouse-core/audits/accessibility/meta-refresh.js | title": [
                                                                                                                  "audits[meta-refresh].title"
                                                                                                                ],
                                                                                                                  "lighthouse-core/audits/accessibility/meta-refresh.js | description": [
                                                                                                                    "audits[meta-refresh].description"
                                                                                                                  ],
                                                                                                                    "lighthouse-core/audits/accessibility/meta-viewport.js | title": [
                                                                                                                      "audits[meta-viewport].title"
                                                                                                                    ],
                                                                                                                      "lighthouse-core/audits/accessibility/meta-viewport.js | description": [
                                                                                                                        "audits[meta-viewport].description"
                                                                                                                      ],
                                                                                                                        "lighthouse-core/audits/accessibility/object-alt.js | title": [
                                                                                                                          "audits[object-alt].title"
                                                                                                                        ],
                                                                                                                          "lighthouse-core/audits/accessibility/object-alt.js | description": [
                                                                                                                            "audits[object-alt].description"
                                                                                                                          ],
                                                                                                                            "lighthouse-core/audits/accessibility/tabindex.js | title": [
                                                                                                                              "audits.tabindex.title"
                                                                                                                            ],
                                                                                                                              "lighthouse-core/audits/accessibility/tabindex.js | description": [
                                                                                                                                "audits.tabindex.description"
                                                                                                                              ],
                                                                                                                                "lighthouse-core/audits/accessibility/td-headers-attr.js | title": [
                                                                                                                                  "audits[td-headers-attr].title"
                                                                                                                                ],
                                                                                                                                  "lighthouse-core/audits/accessibility/td-headers-attr.js | description": [
                                                                                                                                    "audits[td-headers-attr].description"
                                                                                                                                  ],
                                                                                                                                    "lighthouse-core/audits/accessibility/th-has-data-cells.js | title": [
                                                                                                                                      "audits[th-has-data-cells].title"
                                                                                                                                    ],
                                                                                                                                      "lighthouse-core/audits/accessibility/th-has-data-cells.js | description": [
                                                                                                                                        "audits[th-has-data-cells].description"
                                                                                                                                      ],
                                                                                                                                        "lighthouse-core/audits/accessibility/valid-lang.js | title": [
                                                                                                                                          "audits[valid-lang].title"
                                                                                                                                        ],
                                                                                                                                          "lighthouse-core/audits/accessibility/valid-lang.js | description": [
                                                                                                                                            "audits[valid-lang].description"
                                                                                                                                          ],
                                                                                                                                            "lighthouse-core/audits/accessibility/video-caption.js | title": [
                                                                                                                                              "audits[video-caption].title"
                                                                                                                                            ],
                                                                                                                                              "lighthouse-core/audits/accessibility/video-caption.js | description": [
                                                                                                                                                "audits[video-caption].description"
                                                                                                                                              ],
                                                                                                                                                "lighthouse-core/audits/accessibility/video-description.js | title": [
                                                                                                                                                  "audits[video-description].title"
                                                                                                                                                ],
                                                                                                                                                  "lighthouse-core/audits/accessibility/video-description.js | description": [
                                                                                                                                                    "audits[video-description].description"
                                                                                                                                                  ],
                                                                                                                                                    "lighthouse-core/config/default-config.js | a11yCategoryTitle": [
                                                                                                                                                      "categories.accessibility.title"
                                                                                                                                                    ],
                                                                                                                                                      "lighthouse-core/config/default-config.js | a11yCategoryDescription": [
                                                                                                                                                        "categories.accessibility.description"
                                                                                                                                                      ],
                                                                                                                                                        "lighthouse-core/config/default-config.js | a11yCategoryManualDescription": [
                                                                                                                                                          "categories.accessibility.manualDescription"
                                                                                                                                                        ],
                                                                                                                                                          "lighthouse-core/config/default-config.js | metricGroupTitle": [
                                                                                                                                                            "categoryGroups.metrics.title"
                                                                                                                                                          ],
                                                                                                                                                            "lighthouse-core/config/default-config.js | loadOpportunitiesGroupTitle": [
                                                                                                                                                              "categoryGroups[load-opportunities].title"
                                                                                                                                                            ],
                                                                                                                                                              "lighthouse-core/config/default-config.js | loadOpportunitiesGroupDescription": [
                                                                                                                                                                "categoryGroups[load-opportunities].description"
                                                                                                                                                              ],
                                                                                                                                                                "lighthouse-core/config/default-config.js | budgetsGroupTitle": [
                                                                                                                                                                  "categoryGroups.budgets.title"
                                                                                                                                                                ],
                                                                                                                                                                  "lighthouse-core/config/default-config.js | budgetsGroupDescription": [
                                                                                                                                                                    "categoryGroups.budgets.description"
                                                                                                                                                                  ],
                                                                                                                                                                    "lighthouse-core/config/default-config.js | diagnosticsGroupTitle": [
                                                                                                                                                                      "categoryGroups.diagnostics.title"
                                                                                                                                                                    ],
                                                                                                                                                                      "lighthouse-core/config/default-config.js | diagnosticsGroupDescription": [
                                                                                                                                                                        "categoryGroups.diagnostics.description"
                                                                                                                                                                      ],
                                                                                                                                                                        "lighthouse-core/config/default-config.js | pwaFastReliableGroupTitle": [
                                                                                                                                                                          "categoryGroups[pwa-fast-reliable].title"
                                                                                                                                                                        ],
                                                                                                                                                                          "lighthouse-core/config/default-config.js | pwaInstallableGroupTitle": [
                                                                                                                                                                            "categoryGroups[pwa-installable].title"
                                                                                                                                                                          ],
                                                                                                                                                                            "lighthouse-core/config/default-config.js | pwaOptimizedGroupTitle": [
                                                                                                                                                                              "categoryGroups[pwa-optimized].title"
                                                                                                                                                                            ],
                                                                                                                                                                              "lighthouse-core/config/default-config.js | a11yBestPracticesGroupTitle": [
                                                                                                                                                                                "categoryGroups[a11y-best-practices].title"
                                                                                                                                                                              ],
                                                                                                                                                                                "lighthouse-core/config/default-config.js | a11yBestPracticesGroupDescription": [
                                                                                                                                                                                  "categoryGroups[a11y-best-practices].description"
                                                                                                                                                                                ],
                                                                                                                                                                                  "lighthouse-core/config/default-config.js | a11yColorContrastGroupTitle": [
                                                                                                                                                                                    "categoryGroups[a11y-color-contrast].title"
                                                                                                                                                                                  ],
                                                                                                                                                                                    "lighthouse-core/config/default-config.js | a11yColorContrastGroupDescription": [
                                                                                                                                                                                      "categoryGroups[a11y-color-contrast].description"
                                                                                                                                                                                    ],
                                                                                                                                                                                      "lighthouse-core/config/default-config.js | a11yNamesLabelsGroupTitle": [
                                                                                                                                                                                        "categoryGroups[a11y-names-labels].title"
                                                                                                                                                                                      ],
                                                                                                                                                                                        "lighthouse-core/config/default-config.js | a11yNamesLabelsGroupDescription": [
                                                                                                                                                                                          "categoryGroups[a11y-names-labels].description"
                                                                                                                                                                                        ],
                                                                                                                                                                                          "lighthouse-core/config/default-config.js | a11yNavigationGroupTitle": [
                                                                                                                                                                                            "categoryGroups[a11y-navigation].title"
                                                                                                                                                                                          ],
                                                                                                                                                                                            "lighthouse-core/config/default-config.js | a11yNavigationGroupDescription": [
                                                                                                                                                                                              "categoryGroups[a11y-navigation].description"
                                                                                                                                                                                            ],
                                                                                                                                                                                              "lighthouse-core/config/default-config.js | a11yAriaGroupTitle": [
                                                                                                                                                                                                "categoryGroups[a11y-aria].title"
                                                                                                                                                                                              ],
                                                                                                                                                                                                "lighthouse-core/config/default-config.js | a11yAriaGroupDescription": [
                                                                                                                                                                                                  "categoryGroups[a11y-aria].description"
                                                                                                                                                                                                ],
                                                                                                                                                                                                  "lighthouse-core/config/default-config.js | a11yLanguageGroupTitle": [
                                                                                                                                                                                                    "categoryGroups[a11y-language].title"
                                                                                                                                                                                                  ],
                                                                                                                                                                                                    "lighthouse-core/config/default-config.js | a11yLanguageGroupDescription": [
                                                                                                                                                                                                      "categoryGroups[a11y-language].description"
                                                                                                                                                                                                    ],
                                                                                                                                                                                                      "lighthouse-core/config/default-config.js | a11yAudioVideoGroupTitle": [
                                                                                                                                                                                                        "categoryGroups[a11y-audio-video].title"
                                                                                                                                                                                                      ],
                                                                                                                                                                                                        "lighthouse-core/config/default-config.js | a11yAudioVideoGroupDescription": [
                                                                                                                                                                                                          "categoryGroups[a11y-audio-video].description"
                                                                                                                                                                                                        ],
                                                                                                                                                                                                          "lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupTitle": [
                                                                                                                                                                                                            "categoryGroups[a11y-tables-lists].title"
                                                                                                                                                                                                          ],
                                                                                                                                                                                                            "lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupDescription": [
                                                                                                                                                                                                              "categoryGroups[a11y-tables-lists].description"
                                                                                                                                                                                                            ],
                                                                                                                                                                                                              "lighthouse-core/config/default-config.js | seoMobileGroupTitle": [
                                                                                                                                                                                                                "categoryGroups[seo-mobile].title"
                                                                                                                                                                                                              ],
                                                                                                                                                                                                                "lighthouse-core/config/default-config.js | seoMobileGroupDescription": [
                                                                                                                                                                                                                  "categoryGroups[seo-mobile].description"
                                                                                                                                                                                                                ],
                                                                                                                                                                                                                  "lighthouse-core/config/default-config.js | seoContentGroupTitle": [
                                                                                                                                                                                                                    "categoryGroups[seo-content].title"
                                                                                                                                                                                                                  ],
                                                                                                                                                                                                                    "lighthouse-core/config/default-config.js | seoContentGroupDescription": [
                                                                                                                                                                                                                      "categoryGroups[seo-content].description"
                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                      "lighthouse-core/config/default-config.js | seoCrawlingGroupTitle": [
                                                                                                                                                                                                                        "categoryGroups[seo-crawl].title"
                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                        "lighthouse-core/config/default-config.js | seoCrawlingGroupDescription": [
                                                                                                                                                                                                                          "categoryGroups[seo-crawl].description"
                                                                                                                                                                                                                        ]
    }
  },
  "stackPacks": []
}