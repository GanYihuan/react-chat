{
  let name = 'imooc'
}
// The outside cannot be invoked with let decorated
console.log(name)


const name = 'imooc'
name = 'woniu'
// Constants defined by const cannot be modified
console.log(name)



name = 'imooc';
age = '28';
// Template strings: Substituting "+" stitching
console.log(`Name: ${name}, Age: ${age}`);



function hello(name) {
  console.log(`hello ${name}`)
}
// Arrow function with default parameter
let hello1 = (name = 'world') => {
  console.log(`hello ${name}`)
}
hello('world');
hello1('world');
setTimeout(() => {
  console.log('箭头函数保持this作用域');
}, 1000);
// Arrow function that returns a value directly
let cal = num => num * 2
// Multiple parameters
let cal1 = (num1, num2) => num1 * num2



function hello3(name1, name2) {
  console.log(name1, name2);
}
let arr = ['Gan', 'Ehank'];
// ES5 Expand Array Pass Value
hello.apply(null, arr)
// ES6 Expand Array Pass Value
hello3(...arr);



const object = {
  name: 'Omooc-chat',
  course: 'react-course'
};
console.log(Object.keys(object));
console.log(Object.values(object));
// entries: key,value -> array. Obj transition array
console.log(Object.entries(object));



const name2 = 'imooc2';
const obj = {
  name2: 'hello'
}
obj[name2] = 'hello world';
console.log(obj); // {name2:"hello",imooc2:"hello imooc"}
// es6
const name4 = 'imooc';
const obj3 = {
  name4,
  // Calculation properties
  [name4]: 'hello',
  hello: function () {},
  hello1() {}
}
console.log(obj3);
// {hello:ƒ ()
// hello1:ƒ hello1()
// imooc:"hello"
// name4:"imooc"}



const obj4 = {name: 'imooc', course: 'react'};
const obj5 = {type: 'it', name: 'woniu'};
console.log({...obj4, ...obj5, date: '2017'});
// {
//   course:"react"
//   date:"2017"
//   name:"woniu"
//   type:"it"
// }



// Bulk Assignment
const arr2 = ['hello', 'imooc'];
let [arg1, arg2] = arr2;
console.log(arg1, '|', arg2);
// hello | imooc
const obj6 = {name5: 'imooc5', course5: 'reac5'};
const {name5, course5} = obj6;
console.log(name5, '|', course5);
// imooc5 | reac5



class MyApp {
  constructor() {
    this.name = 'imooc6'
  }

  sayHello() {
    console.log(`hello ${this.name} !`)
  }
}

const app = new MyApp();
app.sayHello();



// All introduced
import * as mod from ''
