import { getTest } from "./test.js"; // новая тема - модули

const $ = (title) => document.querySelector(title); // вспомогательнвя функция для получения элемента из ДОМ
const element = teg => document.createElement(teg); // вспомогательнвя функция для создяния элемента

// функция для создания хедера с формой
const Header = (data) => {
  const form = element('form');
  form.className = 'form';

  const deleteBtn = element('input');
  deleteBtn.type = 'button';
  deleteBtn.className = 'form_button';
  deleteBtn.value = 'Delete All';
  deleteBtn.id = 'deleteAll';

  const input = element('input');
  input.type = 'text';
  input.className = 'form_input';
  input.id = 'title_todo';
  input.placeholder = 'Enter todo';

  const addBtn = element('input');
  addBtn.type = 'submit';
  addBtn.className = 'form_button';
  addBtn.value = 'Add';
  addBtn.id = 'add';

  form.insertAdjacentElement('afterbegin', addBtn);
  form.insertAdjacentElement('afterbegin', input);
  form.insertAdjacentElement('afterbegin', deleteBtn);

  // прикручиваем евенты к форме
  form.addEventListener('submit', e => {
    e.preventDefault();

    const value = input.value;

    if (!value.trim()) {
      input.value = '';
      return;
    };

    data.push({
      id: Date.now(),
      date: new Date().toLocaleString(),
      text: value.trim(),
      isChecked: false,
    });

    localStorage.setItem('todo', JSON.stringify(data));
    render($('#app')); // делаем рендер приложения с новыми данными
  });

  deleteBtn.addEventListener('click', e => {
    localStorage.removeItem('todo'); // удаляем все туду из списка (data)
    render($('#app')); // делаем рендер приложения с новыми данными
  })

  return form;
};

// функция для создания карточки (item element)
const Card = (todo, data) => {
  const card = element('div');
  card.className = 'card';
  card.id = todo.id;  // присваеиваем значение из фргумента функции

  const leftBlock = element('div');
  leftBlock.className = 'card_left_block';

  const checkBox = element('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'card_btn_success';
  checkBox.name = 'check';
  checkBox.checked = todo.isChecked; // присваеиваем значение из фргумента функции

  const text = element('p');
  text.className = 'card_text';
  text.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
  text.innerHTML = todo.text; // присваеиваем значение из фргумента функции

  // собираем все елементы в левый блок
  leftBlock.insertAdjacentElement('afterbegin', checkBox);
  leftBlock.insertAdjacentElement('beforeend', text);
  // ==================================

  const rightBlock = element('div');
  rightBlock.className = 'card_right_block';

  const deleteBtn = element('button');
  deleteBtn.className = 'card_btn_delete';
  deleteBtn.innerHTML = 'x';

  const currentDate = element('p');
  currentDate.className = 'card_date';
  currentDate.innerHTML = todo.date; // присваеиваем значение из фргумента функции

  // собираем все елементы в правый блок
  rightBlock.insertAdjacentElement('afterbegin', deleteBtn);
  rightBlock.insertAdjacentElement('beforeend', currentDate);
  // ==================================

  // прикручиваем евенты к форме
  deleteBtn.addEventListener('click', e => {
    e.preventDefault();

    const index = data.indexOf(todo);
    data.splice(index, 1);

    localStorage.setItem('todo', JSON.stringify(data));
    render($('#app')); // делаем рендер приложения с новыми данными
  });

  checkBox.addEventListener('change', (e) => {
    text.style.textDecoration = e.target.checked ? 'line-through' : 'none';
    const updatedData = data
      .map((item) => item.id === todo.id ? { ...item, isChecked: e.target.checked } : item);

    localStorage.setItem('todo', JSON.stringify(updatedData));
  })

  // собираем карточку и возвращаем
  card.insertAdjacentElement('afterbegin', leftBlock);
  card.insertAdjacentElement('beforeend', rightBlock);

  return card;
};

// функция для создания main (тело приложения) элемента
const Main = (data) => {
  const content = element('div');
  content.className = 'content';

  data.forEach(item => {
    content.insertAdjacentElement('beforeend', Card(item, data));
  });

  return content;
};

//собираем все наше приложение
const Field = (data) => {
  const field = element('div');
  field.className = 'field';
  
  field.insertAdjacentElement('afterbegin', Header(data));
  field.insertAdjacentElement('beforeend', Main(data));

  return field;
}

// функция инициализации приложения (старт нашего приложения)
const render = (app) => {
  const data = JSON.parse(localStorage.getItem('todo')) || [];
  
  app.innerHTML = '';
  app.insertAdjacentElement('afterbegin', Field(data));
};



// запуск приложения
render($('#app'));
getTest()


