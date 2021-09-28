const {
  shippingStepFormDesktop,
  billingStepFormDesktop,
  reviewStepFormDesktop,
} = require('../../app/modules/checkout.page');
const homePage = require('../../app/modules/home.page');
const matrressPage = require('../../app/modules/matrress.page');

const getFrameByCss = require('../../utils/get-frame-by-css');

require('../hooks');
describe('shortest flow to by a mattress', () => {
  test('GIVEN user navigates to homepage', async () => {
    await page.goto(homePage.route);
  });

  test('WHEN user clicks "shopMattressButton"', async () => {
    await page.click(homePage.saleHeroSection.shopMattressButton.css);
  });

  test('AND user clicks "addToCartButton"', async () => {
    await page.click(matrressPage.matrressAddToCartSection.shopMattressButton.css);
  });

  test('AND user fills out the required fields on “shipping” step', async () => {
    const { email, fullName, addressLine1, city, state, zip, phone } = shippingStepFormDesktop;

    await page.fill(email.css, 'email@example.com', { noWaitAfter: true });
    await page.fill(fullName.css, 'Bob Bobson', { noWaitAfter: true });
    await page.fill(addressLine1.css, 'Charles de Gol ave. 34', { noWaitAfter: true });
    await page.fill(city.css, 'Austin', { noWaitAfter: true });
    await page.selectOption(state.css, 'TX', { noWaitAfter: true });
    await page.fill(zip.css, '77474', { noWaitAfter: true });
    await page.fill(phone.css, '3333333333', { noWaitAfter: true });
  });

  test('AND user click on “continue to billing” button', async () => {
    await page.click(shippingStepFormDesktop.proceedButton.css);
  });

  test('AND user fills billing data and proceeds to a review step', async () => {
    const { proceedButton, cardNumber, cvcNumber, expireDate } = billingStepFormDesktop;
    const futureCardDateString = '12' + `${new Date().getFullYear() + 2}`.slice(-2)

    const cardNumberFrame = await getFrameByCss(cardNumber.frameCss);    
    // fake credit card from https://stripe.com/docs/testing#payment-intents-api
    await cardNumberFrame.fill(cardNumber.inputCss, '4242424242424242')
    
    const expireDateFrame = await getFrameByCss(expireDate.frameCss);
    await expireDateFrame.fill(expireDate.inputCss, futureCardDateString);

    const cvcNumberFrame = await getFrameByCss(cvcNumber.frameCss);
    await cvcNumberFrame.fill(cvcNumber.inputCss, '123');

    await page.click(proceedButton.css);
  });

  test('THEN user can see "place order button"', async () => {
    await page.waitForSelector(reviewStepFormDesktop.placeOrderButton.css);
    // await page.screenshot({path: 'checkout_last_step.png'})
  });
});
