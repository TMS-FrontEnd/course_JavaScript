// https://developer.mozilla.org/ru/docs/Web/API/Element/classList
/*
useful methods of classlist:
el.classList.add('name', .....)
el.classList.remove('name')

el.classList.toggle('name')

el.classList.contains('name')); //true or false

*/

/*
Три способа назначения обработчика:
1 - через атрибут HTML
2 - DOM свойство onclick у элемента
3 - метод addEventListener
*/

// останавливает всплытие - event.stopPropagation()
// options - true or false (default === false)


// https://learn.javascript.ru/bubbling-and-capturing
// https://learn.javascript.ru/event-delegation
/*
Каждый обработчик имеет доступ к свойствам события event:

event.target – самый глубокий элемент, на котором произошло событие.
event.currentTarget (=this) – элемент, на котором в данный момент сработал обработчик (тот, на котором «висит» конкретный обработчик)
event.eventPhase – на какой фазе он сработал (погружение=1, фаза цели=2, всплытие=3).
*/


// https://learn.javascript.ru/focus-blur
// https://learn.javascript.ru/events-change
// работа с датами
/*
const date = new Date()
console.log(date.toLocaleDateString());
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const todo = {
  id: 1,
  date: '19:35 17 sept',
  text: 'Play video games',
  isChecked: true,
}

const data = [];


const getStringCard = ({ id, text, date }) => {
  return `
    <div class="card">
      <div class="card_left_block">
        <input
          type="checkbox"
          name="check"
          class="card_btn_success"
        >
        <p class="card_text">${text}</p>
      </div>
      <div class="card_right_block">
        <button id=${id} class="card_btn_delete">X</button>
        <p class="card_date">${date}</p>
      </div>
    </div>
  `
}

const removeItem = (data, id) => {
  const item = data.find(e => e.id === +id)
  const i = data.indexOf(item)
  data.splice(i, 1)
}

const addToDo = (data) => {
  const content = document.querySelector('.content')
  const cards = data.map(e => getStringCard({ ...e })).join('')
  content.innerHTML = cards
}


const form = document.querySelector('.form')

form.addEventListener('submit', event => {
  event.preventDefault()
  const inp = document.querySelector('#title_todo')
  const text = inp.value
  const currentDate = new Date()

  const newToDoItem = {
    id: Date.now(),
    date: currentDate.toLocaleDateString(),
    text,
  }

  data.push(newToDoItem)
  addToDo(data);

  inp.value = ''
})

const content = document.querySelector('.content')
content.addEventListener('click', e => {
  e.preventDefault()
  
  if (e.target.className === "card_btn_delete") {
    removeItem(data, e.target.id)
    addToDo(data);
  }
})