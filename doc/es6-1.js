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


