const sizeChanger = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${sizeChanger.value}px`;

sizeChanger.addEventListener('input', event => {
  text.style.fontSize = `${event.target.value}px`;
});
