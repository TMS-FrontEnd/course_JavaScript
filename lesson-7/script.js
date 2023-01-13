// function User(name, age) {
//   // this {}
//   this.name = name,
//   this.age = age,
//   this.getYearOfBirthday = () => {
//     return new Date().getFullYear() - this.age
//   },
//   this.showYearOfBirthday = () => {
//     const year = this.getYearOfBirthday()
//     console.log(`${this.name} ${year} рождения`);
//   }
// }

// const user = new User('Oleg', 30)
// const user1 = new User('Ivan', 25)

// user.showYearOfBirthday()
// user1.showYearOfBirthday()


const newStr = (str) => {
  return str
    .toUpperCase()
    .split('')
    .map((w, i) => w + w.repeat(i).toLowerCase())
    .join('-')
}

console.log(newStr('asWr'));
