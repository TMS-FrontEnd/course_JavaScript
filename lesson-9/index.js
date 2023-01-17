const form = document.querySelector('.form')
const inp = document.querySelector('.form_input')
const submitBtn = document.querySelector('#add')

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(inp.value);
})


const data = [
  {id: 1, text: 'купить молоко'},
  {id: 2, text: 'сделать уроки'},
  {id: 3, text: 'поспать'},
  {id: 4, text: 'поработать'},
];


const content = document.querySelector('.content')

const string = data.map((e, i) => {
  //const id = Date.now()
  return `
    <div class="card">
      <div class="card_left_block">
        <button class="card_btn_success">&#10003;</button>
        <p class="card_text">${e.text}</p>
      </div>
      <div class="card_right_block">
        <button class="card_btn_delete" >X</button>
        <p class="card_date">${new Date().toLocaleDateString()}</p>
      </div>
    </div>
  `
}).join('')

;
