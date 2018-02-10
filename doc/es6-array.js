// Traversing an array
[1, 2, 3].forEach(function (value, index) {
  console.log(value);
});
// Map new Array
arr = [1, 2, 3].map(v => v * 2);
// Whether all elements pass the test
[1, 2, 3, 4].every(v => v > 3);
// Is there an element passing the test
[1, 2, 3, 4].some(v => v > 3);
// Filter array
[1, 2, 3, 4, 5].filter(v => v > 3);
// Find the element that meets the criteria
arr = [{name: 'genius', age: '25'}, {name: 'rmos', age: 1}];
// Find Index
[1, 2, 3].indexOf(2);
// Connecting arrays
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
[...arr1,...arr2];
// Array to weight
arr = [1, 2, 3, 4, 3, 2, 1];
[...new Set(arr)];