// https://learn.javascript.ru/dom-navigation

/*Получив DOM-узел, мы можем перейти к его ближайшим соседям используя навигационные ссылки.

Есть два основных набора ссылок:

Для всех узлов: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
Только для узлов-элементов:
parentElement,
children,
firstElementChild,
lastElementChild,
previousElementSibling,
nextElementSibling.
*/

/* Ещё немного ссылок: таблицы
До сих пор мы описывали основные навигационные ссылки.

Некоторые типы DOM-элементов предоставляют для удобства дополнительные свойства, специфичные для их типа.

Таблицы – отличный пример таких элементов.

Элемент <table>, в дополнение к свойствам, о которых речь шла выше, поддерживает следующие:

table.rows – коллекция строк <tr> таблицы.
table.caption/tHead/tFoot – ссылки на элементы таблицы <caption>, <thead>, <tfoot>.
table.tBodies – коллекция элементов таблицы <tbody> (по спецификации их может быть больше одного).
<thead>, <tfoot>, <tbody> предоставляют свойство rows:

tbody.rows – коллекция строк <tr> секции.
<tr>:

tr.cells – коллекция <td> и <th> ячеек, находящихся внутри строки <tr>.
tr.sectionRowIndex – номер строки <tr> в текущей секции <thead>/<tbody>/<tfoot>.
tr.rowIndex – номер строки <tr> в таблице (включая все строки таблицы).
<td> and <th>:

td.cellIndex – номер ячейки в строке <tr>.*/

// https://learn.javascript.ru/searching-elements-dom

/*Есть 6 основных методов поиска элементов в DOM:

Метод	                  Ищет по...	     Ищет внутри элемента?	Возвращает живую коллекцию?
querySelector	            CSS-selector	      ✔	                           -
querySelectorAll	        CSS-selector	      ✔                           	-
getElementById	          id	                -                           	-
getElementsByName	        name	              -                           	✔
getElementsByTagName	    tag or '*'	        ✔                           	✔
getElementsByClassName	  class	              ✔                           	✔
*/


// https://learn.javascript.ru/modifying-document
/* 
Вот методы для различных вариантов вставки:

node.append(...nodes or strings) – добавляет узлы или строки в конец node,
node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
node.before(...nodes or strings) –- вставляет узлы или строки до node,
node.after(...nodes or strings) –- вставляет узлы или строки после node,
node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.
*/

/*
А что, если мы хотим вставить HTML именно «как html», со всеми тегами и прочим, как делает это elem.innerHTML?

insertAdjacentHTML/Text/Element
С этим может помочь другой, довольно универсальный метод: elem.insertAdjacentHTML(where, html).

Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку. Значение должно быть одним из следующих:

"beforebegin" – вставить html непосредственно перед elem,
"afterbegin" – вставить html в начало elem,
"beforeend" – вставить html в конец elem,
"afterend" – вставить html непосредственно после elem.
Второй параметр – это HTML-строка, которая будет вставлена именно «как HTML».
*/

/* 
Удаление узлов
Для удаления узла есть методы node.remove().

*/

/* 
Итого
Методы для создания узлов:

document.createElement(tag) – создаёт элемент с заданным тегом,
document.createTextNode(value) – создаёт текстовый узел (редко используется),
elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.
Вставка и удаление:

node.append(...nodes or strings) – вставляет в node в конец,
node.prepend(...nodes or strings) – вставляет в node в начало,
node.before(...nodes or strings) – вставляет прямо перед node,
node.after(...nodes or strings) – вставляет сразу после node,
node.replaceWith(...nodes or strings) – заменяет node.
node.remove() – удаляет node.
Устаревшие методы:

parent.appendChild(node)
parent.insertBefore(node, nextSibling)
parent.removeChild(node)
parent.replaceChild(newElem, node)
Все эти методы возвращают node.

Если нужно вставить фрагмент HTML, то elem.insertAdjacentHTML(where, html) вставляет в зависимости от where:

"beforebegin" – вставляет html прямо перед elem,
"afterbegin" – вставляет html в elem в начало,
"beforeend" – вставляет html в elem в конец,
"afterend" – вставляет html сразу после elem.
Также существуют похожие методы elem.insertAdjacentText и elem.insertAdjacentElement, они вставляют текстовые строки и элементы, но они редко используются.

Чтобы добавить HTML на страницу до завершения её загрузки:

document.write(html)
После загрузки страницы такой вызов затирает документ. В основном встречается в старых скриптах.
*/

