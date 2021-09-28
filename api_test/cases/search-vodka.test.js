const { get } = require('axios').default;
const { cocktailsEndpoint } = require('../app.config');
const getIngredients = require('../utils/check-ingredient-presence');

let drinks = {};

describe('test search endpoint', () => {
  test('search for "q=vodka"', async () => {
    const { status, data } = await get(`${cocktailsEndpoint}/search.php?s=vodka`);

    expect(status).toEqual(200);

    drinks = data.drinks;
  });

  test('there is NO “bourbon” or “whiskey” in the cocktails collection', () => {
    const wrongSpirits = ['bourbon', 'whiskey'];
    const isListBourbonAndWhiskeyFree = drinks.every((cocktail) => {
      const ingredients = getIngredients(cocktail);

      return wrongSpirits.every((seeked) => !ingredients.includes(seeked));
    });

    expect(isListBourbonAndWhiskeyFree).toBeTruthy();
  });

  test('there is "vodka" in each cocktail name', () => {
    const isVodkaPresentInName = drinks.every((cocktail) => cocktail.strDrink.match(/[vV]odka/));

    expect(isVodkaPresentInName).toBeTruthy();
  });

  test('each coctail has Italian instructions', () => {
    const isItalianPresent = drinks.every(
      (cocktail) =>
        typeof cocktail.strInstructionsIT === 'string' && cocktail.strInstructionsIT !== '',
    );

    expect(isItalianPresent).toBeTruthy();
  });

  test('amount of drinks is always the same', () => {
    const amountOfDrinks = drinks.length;

    expect(amountOfDrinks).toMatchSnapshot();
  });
});
