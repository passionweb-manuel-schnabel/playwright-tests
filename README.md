# Playwright Testing in TYPO3

## What does it do?

This project shows the use of the Playwright Testing API to test Webapplications and Websites.

1.0.0: Installation

1.1.0: Initial configuration

1.2.0: General test structure

1.3.0: Implemented visual comparison test

1.4.0: Implemented click test

1.5.0: Showcase clicktest generation with codegen

## Installation

via DDEV

    ddev start

You will be asked a few questions during the installation:

"Need to install Playwright, OK to proceed?" -> Answer: yes
"Do you want to use TypeScript or JavaScript?" -> Answer: TypeScript
"Where to put your end-to-end tests?" -> Answer: tests
"Add a GitHub workflow?" -> Answer: no
"Install Playwright browsers?" -> Answer: yes
"Install Playwright operating system dependencies?" -> Answer: yes
After installing Playwright, you will be asked:

"/var/www/html/test/playwright/playwright.config.ts already exists. Override it?" -> Answer: no

## Requirements

This example uses no 3rd party libraries.

## Troubleshooting and logging

If something does not work as expected the tests have to be debugged with common typescript debugging strategies.

## Achieving more together or Feedback, Feedback, Feedback

I'm grateful for any feedback! Be it suggestions for improvement, requests or just a (constructive) feedback on how good or crappy this snippet/repo is.

Feel free to send me your feedback to [service@passionweb.de](mailto:service@passionweb.de "Send Feedback") or [contact me on Slack](https://typo3.slack.com/team/U02FG49J4TG "Contact me on Slack")
