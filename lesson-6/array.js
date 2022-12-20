// Создание массива

const arr = new Array(); // очень редко
const arr1 = [];

// Свойство length (такого свойства нет в объекте)

// Массив это объект поэтому передается по ссылке 

// Изменение значения
  // Меняем существующее
  // Добавляем новое

// Методы массивов
  // push - добавляет в конец массива arr.push('...', '...')
  // shift - удаляет в начале
  // pop - удаляет последний
  // unshift - добавляет в начало

// Удаление выбранного
  // delete arr[1]  - нюанс: делает ячеуку пустой и длина массива не меняется

// Полезные методы
  /*
  splice
    arr.splice(start, count element) - удаляет элемент
    const newArr = arr.splice(start, count element) - удаляет элемент и возвращает в переменную
    arr.splice(start, count element, new element) - заменяем на значание
    arr.splice(start, 0, item) - добавляем элемент
    arr.splice(-1, 1) - удаляем последний элемент

  slice - возвращает новый массив  
    const newArr = arr.slice(start, end but not includ)
    const new = arr.slice(-2, -1) - с обратной стороны 
    const new = arr.slice()  -копирует массив

  concat -возвращает новый массив (добавляет или копирует)
    const new arr.concat()  

  indexOf(item, from) - return i or -1
  
  includes(item, from) - return true or false

  find
  filter
  sort
  */

  
