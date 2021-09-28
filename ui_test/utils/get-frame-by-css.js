async function getFrameByCss(iframeCss, { targetPage } = {}) {
  const page = targetPage || global.page
  const formName = await page.getAttribute(iframeCss, 'name');

  return page.frame(formName);
};

module.exports = getFrameByCss