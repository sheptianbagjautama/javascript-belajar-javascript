// // belajar var, let, dan const


//menggunakan keyword var
// var name = 'John Doe';
// console.log(name);

// name = "Steve Smith";
// console.log(name);

// //init var
// var greeting;
// console.log(greeting);

// greeting = "Hello";
// console.log(greeting);

// //Aturan variabel di javascript
// // letter, number(tidak boleh di awal), _ , $
// //case sensitive

// var variable;
// var _variable;
// var var_able;
// var $variable;
// var vari$able;
// var variabel123;

// //multi words;
// var firstname;
// var firstName;
// var FirstName;
// var first_name;

//menggunakan keyword let
// let name;
// name="John Doe";
// console.log(name);

// name = "Sara";
// console.log(name);

//Menggunakan keyword const, yang value nya tetap, tidak bisa diubah
// const name = "John Doe";
// console.log.apply(name);

// name="Steve Smith";
// console.log(name);

/**
 * menggunakan objek constanta masih bisa diubah dengan syarat memanggil memanggil variabel constanta.key dari objeknya
seperti ini person.name atau person.age
jika kita langsung mengubah dari variabel konstantanya maka akan tetap tidak bisa diubah
 */

// const person = {
//     name: 'John',
//     age: 30
// }

// person.name = 'Sara';
// person.age = '20';

// // person = 'Sara';

// console.log(person);

/**
 * Pada saat mengubah tipe data konstanta dari objek ke array tidak bisa
 */
const number = [1,2,3,4,5];
number.push(6);

number = {
    a: 1,
    b: 2,
    c: 3
}

console.log(number);
