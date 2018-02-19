//before
var name = 'imooc'
//after
let name = 'imooc'
const site = 'www.imooc.com'



name = 'imooc';
age = '28';
console.log(`Name: ${name}, Age: ${age}`);



// 带默认参数的箭头函数
function hello(name) {
  console.log(`hello ${name}`)
}
let hello1 = (name = 'world') => {
  console.log(`hello ${name}`)
}
hello('world');
hello1('world');
setTimeout(() => {
  console.log('箭头函数保持this作用域');
}, 2000);
// 直接返回值的箭头函数
let cal = num => num * 2
// 多个参数
let cal1 = (num1, num2) => num1 * num2



// 展开数组传值
function hello3(name1, name2) {
  console.log(name1, name2);
}
let arr = ['gan', 'ehank'];
// hello.apply(null, arr)
hello3(...arr);



const object = {
  name: 'Omooc-chat',
  course: 'react-course'
};
console.log(Object.keys(object));
console.log(Object.values(object));
// key,value -> array, obj转变成数组
console.log(Object.entries(object));



const name2 = 'imooc';
const obj = {
  name2: 'hello'
}
obj[name2] = 'hello world';
console.log(obj); // {name2:"hello",imooc:"hello imooc"}
const name3 = 'imooc';
const obj2 = {
  // 计算属性
  [name3]: 'hello'
}
console.log(obj2); // {imooc:"hello"}



const name4 = 'imooc';
const obj3 = {
  name,
  [name]: 'hello',
  hello: function () {

  },
  hello1() {
    // 简写上面的函数
  }
}
console.log(obj3);



const obj4 = {name: 'imooc', course: 'react'};
const obj5 = {type: 'it', name: 'woniu'};
console.log({...obj4, ...obj5, date: '2017'});
// {course: 'react',date: '2017',name: 'woniu',type: 'it'}


const arr2 = ['hello', 'imooc'];
let [arg1, arg2] = arr2;
console.log(arg1, '|', arg2);
// hello imooc



const obj6 = {name5: 'imooc5', course5: 'reac5'};
const {name5, course5} = obj6;
console.log(name5, '|', course5);
// imooc5 | reac5



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





