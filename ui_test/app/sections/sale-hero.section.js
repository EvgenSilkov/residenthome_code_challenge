// I would suggest to add a data-testid to this seciton
const sectionCss = 'section[class^="sale-hero"]';

const saleHeroSection = {
  sectionCss,
  shopMattressButton: {
    css: `${sectionCss} [data-testid="shop_mattress_button"]`,
  },
};

module.exports = saleHeroSection;
