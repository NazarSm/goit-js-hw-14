const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let newIngredients = [];

ingredients.forEach((ingredient) => {
  let item = document.createElement('li');
  item.textContent = ingredient;
  item.className = 'item';

  newIngredients.push(item);
});

document.querySelector('ul').append(...newIngredients);
