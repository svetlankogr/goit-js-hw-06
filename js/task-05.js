const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output')

textInput.addEventListener("input", (event) => {
    textInput.value.length === 0 ? textOutput.textContent = "Anonymous" : textOutput.textContent = event.currentTarget.value;
});