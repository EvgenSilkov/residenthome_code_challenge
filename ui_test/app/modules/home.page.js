const saleHeroSection = require('../sections/sale-hero.section');
const homeVideoTestimonialsSection = require('../sections/home-video-testimonials.section');
const { baseUrl } = require('../app.config');

const homePage = {
  route: baseUrl,
  saleHeroSection,
  homeVideoTestimonialsSection,
};

module.exports = homePage;
