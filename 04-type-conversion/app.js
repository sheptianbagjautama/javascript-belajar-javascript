let val;

//Mengubah dari number to string
val = String(123);
val = String(5+5);

//Mengubah dari boolean to string
val = String(false);

//Mengubah dari Date to string
val = String(new Date());

//Mengubah dari Array to string
val = String([1,2,3,4,5]);

//toString()
val = (5).toString();
val = (true).toString();

//Mengubah string to number
val = Number('51.30');

//Mengubah boolean to number
val = Number(true); //true bernilai 1
val = Number(false); //false bernilai 0

val = Number('hello'); //output Nan(Not a number)
val = Number(['1,2,3']);

//Desimal to integer
val = parseInt('100.31');
val = parseFloat('100.31');


// console.log(val);
// console.log(typeof val);
// //length ini hanya dapat digunakan untuk tipedata string
// // console.log(val.length);
// //untuk menghilangkan desimal
// console.log(val.toFixed(2));

const val1= 5;
const val2= 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);