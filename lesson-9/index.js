const form = document.querySelector('.form')
const inp = document.querySelector('.form_input')
const submitBtn = document.querySelector('#add')

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(inp.value);
})

