
// https://learn.javascript.ru/object

// СИНТАКСИС
  //Создание объекта

  const userInfo = new Object(); // синтаксис "конструктор объекта"
  const userInfo2 = {};  // синтаксис "литерал объекта"

// Свойста объекта. Ключ + значение

  const userInfo3 = {
    name: "Ivan",  // свойство объекта
    age: 30,  // последняя (висячая) запятая
  }

// Имена свойств  
  // Может состоять из двух и более слов

    const userInfo4 = {
      name: "Oleg",
      age: 25,
      "likes javascript": true,
    }

    // console.log(userInfo4["likes javascript"]);
    // console.log(userInfo4["name"]);
    // console.log(userInfo4.name);

  // Вычисляемое или передаваемое имя
  
    let firstPart = "likes";
    const userInfo5 = {
      name: "Ura",
      age: 30,
      [firstPart + " javascript"]: true,
    }

    let key = "name";

    // console.log(userInfo5[key]);

  // Зарезервированные слова в именах - допускаются  

    const user = {
      let: "Lena",
      for: 34,
      0: "Hello" // 0 тоже самое, что "0"
    }

  // Типы данных Symbol
    /*
      Основное применение:
        "Скрытые" свойства объектов, не появится в for...in
    */

    const id = Symbol("id");

    const user2 = {
      name: "Olga",
      age: 20,
      [id]: "Некое значение",
    }

    console.log(user2);
    
// Вложенность

  const userInfo6 = {
    name: "Ivan",
    age: 40,
    adress: {
      city: "Minsk",
      street: "Freedom",
    },
  }

// Свойство из переменной
  function makeUserInfo(name, age) {
    return {
      name: name,  // можно использовать просто name если совпадают
      age: age,
      // ... можно добавлять другие свойства
    };
  }  

  const user3 = makeUserInfo("Dasha", 14);

// Изменение объекта
  // Добавление свойства
  
  const userInfo7 = {
    name: "Ivan",
  };

  userInfo7.age = 26;
  userInfo7["likes javascript"] = true;
  userInfo7.adress = {
    city: "Minsk",
  }

  // Удаление свойства

  delete userInfo7.gae;

  // Изменение свойства

  userInfo7.name = "Oleg";

// Копирование объекта
  /* 
    При копировании объекта в другую переменную сам объект не дублируется,
    а копируется только ссылка на него 
  */

  const car = {
    model: "Lada",
  };

  const carNew = car;
  carNew.model = "Geely";

  // Дублирование методом Object.assign
    // Синтаксис Object.assign(куда(объект), что(свойство №1), что(свойство №1), ...);
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign  

    const obj = { a: 1 };
    const copy = Object.assign({}, obj);
    // console.log(copy); // { a: 1 }

// Проверка существования свойства

  const object = { a: 1 };

  if ("a" in object) {
    // console.log(object.a);
  }

// Цикл для перебора "for ... in" 
  const obj2 = {
    a: 1,
    b: 5,
    c: 10,
  };
  for (let key in obj2) {
    // тело цикла выполняется для каждого свойства объекта
    // console.log("key", key, "value", obj2[key] );
  }

// Методы объекта  

  let userInfo8 = {
    name: "Иван",
    age: 25,
    showInfo: function() {
      console.log(`Меня зовут ${userInfo8.name} и мне ${this.age}.`);
    },
    // showInfo() {
    //   console.log(`Меня зовут ${this.name} и мне ${this.age}.`);
    // },
  }
    // userInfo8.showInfo();

  // Преимущества this
  // const user4 = userInfo8;
  // userInfo8 = null;

  // user4.showInfo();

  // Функция-конструктор
  /* 
    Обычный синтаксис позволяет создавать только один объект
    Но надо создать множество однотипных объектов
  */

    function UserInfo(name) {
      // this = {}; создается пустой объект (неявно)

      this.name = name;
      this.age = 30;

      // return this; возвращается объект (неявео)
    }

    console.log(new UserInfo("Вася"));
    console.log(new UserInfo("Игорь"));