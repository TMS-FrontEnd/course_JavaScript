// ТИПЫ ДАННЫХ
  // Динамическая типизация
    // JS является динамически типизированным т.е тип данных переменной меняется динамически
    // в момент присвоения либо смены ее значения 

  // 8 типов:
    // String - строка ("...", '...', `...`)
    // Number - число (1, 4, Infinity, NaN)
    // Boolean - логический тип (true, false)
    // Null - "ничего", "пустое место"
    // Undefined - неопределенный тип
    // BigInt - для больших чисел (техническое ограничение > 900719925470991 или < -...) 1454n
    // Symbol - уникальный индификатор
    // Object - объект ({ a: 1, b:2 })

    // нюансы!!!
      // let a = null  => Object (ошибка разрабов со всремен создания)
      // let b = 58 / 0  => Infinity
      // let c = NaN  => number

// ПРЕОБРАЗОВАНИЕ ТИПОВ
  // строковое преобразование
    // let age = 25  => age = String(age) or age.toString() or `${age}`

  // численное перобразование
    // let age = '25'
    // Number(age) 
    // parseInt(age)
    // +age 
    // age (/, *, -) 2 
    // age (/, *, -) '2' 
    // Number('Ivan') -  NaN

  // логическое преобразование
    // let n = '', 'Ivan', 0, '', ' ',
    // Boolean(n) или !n

// ВСТРОЕННЫЕ ФУНКЦИИ БРАУЗЕРА
  // alert('Alert - blocks download');
  // const booleanValue = confirm('Do you agree with me?') - blocks download  
  // const string = prompt("Enter your name") - blocks download and returns string
