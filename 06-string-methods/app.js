const firstName = "Sheptian";
const lastName = "Bagja Utama";
const age = 22; 
const phar = 'Hello, my name is '+ firstName + ' and I am '+ age ;
const tags = 'html, css, javascript, php , ruby';

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;
val= 'Hello, my name is '+ firstName + ' and I am '+ age;

//Append (Menambahkan nilai lama dan baru dengan variabel yang sama)
val = 'Alvian ';
val += 'Alvi';

//Escaping 
val = 'That\'s awesome, I cant\'t wait it';
val = "That's awesome, I cant't wait it";

//Length , menghitung jumlah string
val = firstName.length;

//Concate, gabungan variabel dengan concate();
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3];

//indexOf(), mencari nilai
val = firstName.indexOf('a');

//charAt(), mencari nilai setelah melewati 2 char "Sh, e" hasilnya e
val = firstName.charAt(2);
val = firstName.charAt(firstName.length - 1);

//subString(); , mengambil nilai index dari 0-4
val = firstName.substring(0,4);

//slice
val = firstName.slice(0, 4);
val = firstName.slice(-3); //mencari huruf terakhir

//split
val = phar.split(' '); //menampilkan string per split 
val = tags.split(',');

//mengubah nilai string dengan method replace()
val = phar.replace('Hello', 'Hi');

//includes, mencari nilai dalam string jika ada true jika tidak ada false
val = phar.includes('Hello');
console.log(val);