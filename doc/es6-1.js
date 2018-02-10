name = 'imooc';
age = '28';
console.log(`Name: ${name}, Age: ${age}`); // Name: imooc, Age: 28


function hello(name) {
  console.log(`hello ${name}`)
}
hello('world');


setTimeout(() => {
  console.log('箭头函数保持this作用域');
}, 2000);


const hello2 = (name = 'imooc') => {
  console.log(`hello ${name}`)
}
hello2('world2!');


function hello3(name1, name2) {
  console.log(name1, name2);
}
let arr = ['gan', 'ehank'];
hello3(...arr);


const object = {name: 'Omooc-chat', course: 'react-course'};
console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));


const name2 = 'imooc';
const obj = {
  name2: 'hello'
}
obj[name2] = 'hello world';
console.log(obj);


const name3 = 'imooc';
const obj2 = {
  [name3]: 'hello'
}
console.log(obj2);


const name4 = 'imooc';
const obj3 = {
  name,
  [name]: 'hello',
  hello: function () {

  },
  hello1() {

  }
}
console.log(obj3);


const obj4 = {name: 'imooc', course: 'react'};
const obj5 = {type: 'it', name: 'woniu'};
console.log({...obj4, ...obj5, date: '2017'});


const arr2 = ['hello', 'imooc'];
let [arg1, arg2] = arr2;
console.log(arg1, '|', arg2);


const obj6 = {name5: 'imooc5', course5: 'reac5'};
const {name5, course5} = obj6;
console.log(name5, '|', course5);


class MyApp {
  constructor() {
    this.name = 'imooc6'
  }
  sayHello() {
    console.log(`hello ${this.name}`)
  }
}
const app = new MyApp();
app.sayHello();





