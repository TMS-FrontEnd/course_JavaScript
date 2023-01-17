const DIV3 = document.querySelector('#DIV-3');
const body = document.querySelector('body');

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

