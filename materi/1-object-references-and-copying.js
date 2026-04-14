let user = { name: 'Ucup' };
let copy = user;

copy.name = 'Renday';
console.log(user.name);

// Primitive (Langsung pada niainya)
let a = 10;
let b = a;

b = 20;

console.log(b);
console.log(a);

// Object (Referensi pada tempat)
let obj1 = { nama: 'Ucup' };
let obj2 = obj1;
obj2.nama = 'Zaskia';
console.log(obj1.nama);

// Shallow Copy
const original = {
  name: 'Ucup',
  skills: ['JS'],
};
console.log('original:', original.skills);

const shallowCopy = { ...original };
shallowCopy.name = 'Renday';

shallowCopy.skills.push('HTML');

console.log('shalowcopy:', shallowCopy.skills);
console.log('original:', original.skills);

// Deep Copy
const apajalah = structuredClone(original);
// console.log(deepCopy);

apajalah.skills.push('CSS');
console.log('deepcopy:', apajalah.skills);
console.log('original:', original.skills);
