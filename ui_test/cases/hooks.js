const { chromium } = require('playwright');

const isDebug = !!process.env.DEBUG

beforeAll(async () => {
  const launchOptions = isDebug ? {
    headless: false,
    viewport: null,
  } : {}

  global.browser = await chromium.launch(launchOptions);

  global.page = await browser.newPage();

  isDebug && page.setDefaultTimeout(100000)
});

afterAll(async () => {
  await browser.close();
});
