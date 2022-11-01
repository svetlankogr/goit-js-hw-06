const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

ingredients.forEach(el => {
  const item = document.createElement("li");
  item.textContent = el;
  item.classList.add('item')
  ingredientsList.append(item)
})