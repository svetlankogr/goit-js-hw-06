const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')
const numbersOfBoxes = document.querySelector('input')

let size = 30;

createBtn.addEventListener('click', () => {
  createBoxes(numbersOfBoxes.value)
})

destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box)
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
  numbersOfBoxes.value = '';
  size = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}