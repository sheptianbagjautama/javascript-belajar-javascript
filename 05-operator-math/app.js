const num1 = 100;
const num2 = 50;
let val;

//Simple math operator
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//Menampilkan math object
val = Math.PI;
val = Math.E;
val = Math.round(3.7);
val = Math.ceil(2,4);
val = Math.floor(4.7); //menjadi integer
val = Math.sqrt(64); //akar
val = Math.abs(-5); //absolute nilai mines menjadi positif
val = Math.pow(8, 2); //pangkat
val = Math.min(2, 33, 6, 4, 100, 20, 3489, -9);
val = Math.max(2, 33, 6, 4, 100, 20, 3489, -9);
val = Math.random(); //random nilai
val = Math.floor(Math.random() * 50 + 1); //dibawah 50

console.log(val);
