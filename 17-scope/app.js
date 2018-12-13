//Global Scope
/**
 * Nilai keyword var A akan berubah ketika ada variabel yang sama
 */

var a = 1;
let b = 2;
const c= 3;

// function local(){
//     //local scope
//     var a = 4;
//     let b = 5;
//     const c= 6;

//     console.log('Local Scope:', a, b, c);
// }

// local();

// if (true) {
//     //Block Scope
//     var a = 4;
//     let b = 5;
//     const c= 6;
// }

for(var a = 0; a<10; a++){
    console.log(`Loop: ${a}`);
}
console.log('Global Scope:', a, b, c);