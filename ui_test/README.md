
## Scenario: Purchase mattress 
Given: user navigates to https://www.levelsleep.com

When: user clicks on “shop mattress” button
And: user clicks on “Add to Cart” button
And: user fills out the required fields on “shipping” step
And: user click on “continue to billing” button

Then: user has been presented with the billing step and “review purchase” button exists


## Tasks

Write the script representing the Scenario above

Please screenshot and save the result of Then

Bonus > think about how to proceed to the next step (don’t use the real credit card) , implement it and screenshot and save it.

Create a Repository by any Public GIT Portals (GitHub, GitLab, etc)

Provide instructions on how to execute tests (please include README file).

Provide a simple tool for results review 

## Installation:

tested under Node 12 and Node 14
allure2 is used as report generation tool
installed from https://github.com/allure-framework/allure2/releases/tag/2.15.0

debug is avaliable with .vscode/launch.json  "Jest UI test" command

```bash
  export DEBUG=true # or clone the .env file and do "source .env"
  export BASE_URL="https://www.levelsleep.com/" # or clone the .env file and do "source .env"
  yarn install
  yarn user_flows
  allure serve ./allure-results
```

NOTES:

- the application is in the public domain, CAPTCHA should be resolved manually.
  Whitelisting vpn in CAPTCHA service is probably beyond this task

- advertisement/sales popup isn't handled properly.
  The best way to handle it is to look into trigger, and disable/trigger it intentionally.
  Wrapping each and every interaction with a

- SkipDownstreamTests in test.environment.js doesn't work with allure.
  It was supposed to skip downstream tests when the first one had failed.
  Noticed it way to late, seeking an alternative will be way to long.