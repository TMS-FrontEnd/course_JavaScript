// ВВЕДЕНИЕ В ФУНКЦИИ
// https://learn.javascript.ru/function-basics#obyavlenie-funktsii

// ОБЪЯВЛЕНИЕ И ВЫЗОВ
    // Объявление фунекции (Function Declaration)
      function имя(параметры) {
        // тело (код) функции
      }

    // Выбор имени функции
    /*
      Как правило, в имени функции используются перфиксы, обозначающие действия, после которых идет объект действия.
      
      Например:
        "show..." - showMessage
        "get..." - getValue
        "calc..." - calcNumber
        "create..." - createRequest
        "check..." - checkProps
        ...
    */

    // Запуск функции
    /*
      function showMessage() {
        console.log('Hello my first function!');
      }

      showMessage();
    */ 
   
    // Вложенность и видимость функций  
    /* 
      можем вызывать функцию внутри блока
    */ 

    // Локальные переменные
    // Внешние переменные
    // Глобальные переменные - страраемся свести к минимуму


// ПАРАМЕТРЫ И АРГУМЕНТЫ
  /*
    Параметр – это переменная, указанная в круглых скобках в объявлении функции.
    Аргумент – это значение, которое передаётся функции при её вызове.
    Значения по умолчанию
    Функции-колбэки
  */  
// Рекурсия
  /*
    Вызывает сама себя.
    пример - возведение в степень:
      function calcExponentiation(a, n) {
        if (n === 1) return a;
        return a * calcExponentiation(a, n - 1);
      }
      calcExponentiation(2, 3)
    
  */
// КЛЮЧЕВОЕ СЛОВО RETURN
    // Возврат значения (пустая функция возвращает undefined)

// ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
/*
  Function Declaration and Function Expression
  FD: (hoisting)
    function getSumm() {
      тело функции
    }

    getSumm(); - вызов
  FE: ( isn't hoisting )
    const getSumm = function() {
      тело функции
    }; - !!!!обязательно ";"

    getSumm(); - вызов
*/


// !!! Одна функция – одно действие
// !!! Сверхкороткие имена функций - не стоит т.к Функции == Комментарии
// https://learn.javascript.ru/function-expressions
// https://learn.javascript.ru/arrow-functions-basics