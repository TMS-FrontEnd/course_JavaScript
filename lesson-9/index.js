const app = document.querySelector('#app')

const header = document.createElement('header');
const container = document.createElement('div');
const form = document.createElement('form');
const btDeleteAll = document.createElement('button');
const input = document.createElement('input');
const btAdd = document.createElement('button');

app.insertAdjacentElement('afterbegin', header)
header.insertAdjacentElement('afterbegin', container)
container.insertAdjacentElement('afterbegin', form)

form.insertAdjacentElement('afterbegin', btAdd)
form.insertAdjacentElement('afterbegin', input)
form.insertAdjacentElement('afterbegin', btDeleteAll)

container.className = 'container'
btDeleteAll.innerHTML = 'Delete All'
btDeleteAll.className = 'button'
btAdd.className = 'button'
btAdd.innerHTML = 'Add'

btAdd.addEventListener('click', (e) => {
  e.preventDefault()
  e.target.style.color = "red"
})

input.type = 'text'
input.placeholder = 'Enter todo...'
