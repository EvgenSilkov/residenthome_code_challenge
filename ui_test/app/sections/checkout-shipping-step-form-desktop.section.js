const formCss = 'form#checkout_form_desktop';

const checkoutShippingStepFormDesktop = {
  email: {
    css: `${formCss} input[name="email"]`,
  },
  fullName: {
    css: `${formCss} input[name="shippingAddress_fullName"]`,
  },
  addressLine1: {
    css: `${formCss} input[name="shippingAddress_line1"]`,
  },
  city: {
    css: `${formCss} input[name="shippingAddress_city"]`,
  },
  state: {
    css: `${formCss} select[name="shippingAddress_state"]`,
  },
  zip: {
    css: `${formCss} input[name="shippingAddress_zip"]`,
  },
  phone: {
    css: `${formCss} input[name="shippingAddress_phone"]`,
  },
  proceedButton: {
    css: `${formCss} button#checkout_shipping_continue_btn`,
  },
};

module.exports = checkoutShippingStepFormDesktop;
