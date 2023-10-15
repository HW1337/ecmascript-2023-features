const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

array.find(n => n.value % 2 === 1); // { value: 1 }
array.findIndex(n => n.value % 2 === 1); // 0

// До
[...array].reverse().find(n => n.value % 2 === 1); // { value: 3 }

// После
array.findLast(n => n.value % 2 === 1); // { value: 3 }