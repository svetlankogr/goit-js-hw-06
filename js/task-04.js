let counterValue = 0;

const btns = document.querySelectorAll('[data-action]');
const value = document.querySelector('#value')

btns.forEach(el => {
  el.addEventListener('click', () => {
    el.dataset.action === 'decrement' ? counterValue -= 1 : counterValue += 1;
    value.textContent = counterValue
  })
})


