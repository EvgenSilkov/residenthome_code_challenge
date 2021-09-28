Installation:
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