const formCss = 'form#checkout_form_desktop';

const checkoutPaymentStepFormDesktop = {
  cardNumber: {
    frameCss: `${formCss} #card-number iframe[name^="__privateStripeFrame"]`,
    inputCss: '[name="cardnumber"]',
  },
  expireDate: {
    frameCss: `${formCss} #card-expiry iframe[name^="__privateStripeFrame"]`,
    inputCss: `[name="exp-date"]`,
  },
  cvcNumber: {
    frameCss: `${formCss} #card-cvc iframe[name^="__privateStripeFrame"]`,
    inputCss: `[name="cvc"]`,
  },
  proceedButton: {
    css: `${formCss} button#checkout_payment_continue_btn`,
  },
};

module.exports = checkoutPaymentStepFormDesktop;
