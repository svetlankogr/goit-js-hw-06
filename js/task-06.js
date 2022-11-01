const input = document.querySelector('#validation-input');

input.addEventListener('blur', changeBorderColor)

function changeBorderColor() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add('valid')
    input.classList.remove('invalid')
  } else {
    input.classList.add('invalid')
    input.classList.remove('valid')
  }
}