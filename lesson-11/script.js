// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


/*
  window.addEventListener('storage', (event) => {
    console.log(event);
  })
*/

/*
  const data = localStorage.getItem('key') // получаем данные по ключу 
  localStorage.setItem('key-string', 'name-string') // создает/меняет storage по ключ-значение
  localStorage.removeItem('key-string')  // удаляет по ключу
  localStorage.clear() // очищает весь storage
  localStorage.key('key-string') // проверяет наличие данных по ключу
  localStorage.length // получаем длинну всех storage
*/

// ключ и значение ТОЛЬКО строки по типу
// для преобразования объекта в строку и спользуем глобальный объект JSON
 /*
  const user = {
    name: 'Ivan',
    age: 45,
  };

  преобразуем в строку - JSON.stringify(user)
  преобразуем обратно в объект - JSON.parse(localStorage.getItem('user'))
*/
