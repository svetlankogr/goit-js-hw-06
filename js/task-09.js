const bodyBackground = document.body
const btn = document.querySelector('.change-color')
const colorInfo = document.querySelector('.color')

btn.addEventListener('click', changeBackgroundColor)

function changeBackgroundColor() {
  const currentColor = getRandomHexColor();
  bodyBackground.style.backgroundColor = currentColor;
  colorInfo.textContent = currentColor; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}