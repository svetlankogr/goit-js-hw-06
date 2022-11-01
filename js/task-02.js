const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const ingredientsMarkup = ingredients
  .map(el => {
    const item = document.createElement("li");
    item.textContent = el;
    item.classList.add('item')
    return item
  })

ingredientsList.append(...ingredientsMarkup)