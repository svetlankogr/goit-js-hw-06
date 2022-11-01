const form = document.querySelector('.login-form');

form.addEventListener('submit', submitForm)

function submitForm(event) {
  event.preventDefault();
    
  const { elements: { email, password } } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Please enter your email and password!')
  }

  console.log(`${email.name}: ${email.value}, ${password.name}: ${password.value}`);
  event.currentTarget.reset();
}