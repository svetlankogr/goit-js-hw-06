const listItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(el => {
  const title = el.querySelector('h2');
  const quantityOfElements = el.querySelectorAll('li');

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${quantityOfElements.length}`);
});
