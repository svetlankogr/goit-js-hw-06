const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  textOutput.textContent = textInput.value.length === 0 ? 'Anonymous' : event.currentTarget.value;
});
