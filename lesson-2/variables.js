// ПЕРЕМЕННЫЕ И КОНСТАНТЫ
  // переменная - именованные хранилища для данных

// ОБЪЯВЛЕНИЕ ПЕРЕМЕННОЙ 

  // let name = 'Ivan';

  // var, let, const - ключевое слово для объявления переменной
  // name - имя переменной. Может содержать только: 
  //   буквы(лучше латинские),
  //   цифры,
  //   символы $ и _ 
  // При этом первый символ не должен быть цифрой.  

  // верные имена

  // let age;
  // let info123;
  // let $size;
  // let _color;

  // не верные имена:

  //  let 123info;
  //  let my-age;

  // используем стиль lowerCamelCase
  // !!! Регистр имеет значение
  // Нельзя использовать зарезервированные имена

  //  let let;
  //  let break;
  //  let for;

// ПРИСВОЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
  // let myAge = 28;  // let - "пусть"

// ОБЪЯВЛЕНИЕ НЕСКОЛЬКИХ ПЕРЕМЕННЫХ
  // let firstName = 'Ivan', lastName = 'Ivanov'

  // let firstName = 'Ivan',
  //     lastName = 'Ivanov';

  // let firstName = 'Ivan';
  // let lastName = 'Ivanov';

  // let a = b = c = 25;

// ИЗМЕНЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
  // let a = 10;
  // a = 25;
  
// ПЕРЕДАЧА ЗНАЧЕНИЙ
  // let myAge = 36;
  // let myNewAge = 18;
  // myAge = myNewAge;  

// "use strict" - директива которая позволяет работать скрипту в современном режиме
// 'use strict'
  // myAge = 36;
  // строгий режим отключен - все работает и в консоли отобразит - 36
  // строгий режим включон - error, "Uncaught ReferenceError: myAge is not defined"

// ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ
  // пример блока инструкции
  
  // function getBlock() {
  //   let a = 10;
  //   console.log(a);
  // };

  // getBlock();

  // console.log(a);

  // {
  //   let a = 15;
  //   console.log(a);
  // }

  // console.log(a);

// КОНСТАНТЫ
  // именя в upperCase
  // const COLOR = '#ffff';

// КЛЮЧЕВОЕ СЛОВО VAR

  // 'use strict'
  // age = 10;
  // console.log(age);
  // var age;

  // c function не работает:

    // function getBlock() {
    //   var a = 10;
    //   console.log(a);
    // };

    // const getNumber = () => {
    //   var c = 25;
    //   console.log(c);
    // };

    // getBlock();
    // getNumber();

    // console.log({ a, c });


  // но работает с:
    // if (true) {
    //   var a = 10;
    // }  

    // {
    //   var b = 15;
    // }

    // console.log({ a, b, c });

// разница между undefined и not defined
    // let age

    // console.log(age);
    // console.log(a);

    const a = Symbol('foo')
    console.log(a);