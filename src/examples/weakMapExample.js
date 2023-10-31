// До
const data = new Map(); 
const obj = {}; 

data.set(obj, 'Some data'); 
console.log(data.get(obj));

// После
const data = new WeakMap();
const obj = { label: 'Some data' };

const key = Symbol('privateKey');
data.set(key, obj);
console.log(data.get(key));