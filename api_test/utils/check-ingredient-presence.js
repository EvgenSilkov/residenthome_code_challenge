function getIngredients(cocktail) {
  return Object.getOwnPropertyNames(cocktail)
    .filter((prop) => prop.startsWith('strIngredient'))
    .map((prop) => cocktail[prop]);
}

module.exports = getIngredients;
