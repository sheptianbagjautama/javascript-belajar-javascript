//Membuat tipe data array

const number = [54, 23, 60, 1, 68];
const number2 = new Array(90, 7 ,43, 100, 300);
const fruit = ['Apple','Banana','Cherry','Orange','Pear'];
const mix = [30, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

//Get length
val = number.length;
console.log(val);

//Check is array, pengecekan apakah constanta number 2 tipe datannya array
val = Array.isArray(number2)

//Get Single Value
val = fruit[4];
val = fruit[0];

// Insert into array
fruit[2] = 'Grape';

//Find index of value 
val = mix.indexOf(undefined);

// Mutating

//tambah data ke akhir array
number.push(200);

//tambah data ke awal array
number.unshift(7);

//nilai dari akhir array menjadi hilang
number.pop();

//nilai dari awal array menjadi hilang
number.shift();

//menghapus nilai;
number.splice(1,2);

//Reverse array dibalik
fruit.reverse();

console.log(number);

console.log(fruit);
console.log(val);
