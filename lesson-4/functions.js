// ВВЕДЕНИЕ В ФУНКЦИИ
// https://learn.javascript.ru/function-basics#obyavlenie-funktsii

// ОБЪЯВЛЕНИЕ И ВЫЗОВ
    // Объявление фунекции (Function Declaration)
      // function имя(параметры) {
      //   // тело (код) функции
      // }

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


// function showRecomendation(age = 5) {
//   let result = null;

//   if (age >= 18) {
//     result = 'Можешь все';
//   } else if (age > 16) {
//     result = 'Почти все';
//   } else {
//     result = 'очень молод'
//   }

//   console.log({ result });
// }

// showRecomendation(18);
// showRecomendation(17);
// showRecomendation(15);
// showRecomendation();


// пример колбэк функц.
function calcSum(a,b) {
  return a + b;
}

function calcExponentiation(a, b) {
  return a ** b;
}

function showResult(fn, a, b) {
  const result = fn(a, b)
  console.log({ result });
}

showResult(calcSum, 5, 5);

// showResult(calcExponentiation, 2, 3)

// function showRecomendation(age = 5) {
//   let result = null;

//   if (age >= 18) {
//     result = 'Можешь все';
//   } else if (age > 16) {
//     result = 'Почти все';
//   } else {
//     result = 'очень молод'
//   }

//   return result;
// }

 
let v = 0;

function changeVar(x) {
  v = x;
}


changeVar(10);

console.log({ v });


function chacheReturn(x) {
   let r = x * 2
   console.log('внутри ', r);
   return r
}

const res = chacheReturn(4)
console.log({ res });


const getRequest = () =>  {

}

