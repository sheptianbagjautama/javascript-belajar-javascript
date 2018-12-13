// if (true) {
//     do something();
// } else {
//     do something();
// }

const id = 100;

// //Equal To
// if (id == 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCOORRECT');
// }

// //Not Eqal To
// if (id != 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

//Equal to value and type
// if (id === 100) {
//         console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// if (typeof id !='undefined') {
//     console.log(`ID Value is: ${id}`);
// } else {
//     console.log(`ID Value is undefined`);
// }

// if (id == 200) {
//     console.log('CORRECT');
// }

//Greater or Less than
// if (id >= 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// const color = 'red';

// if (color == 'red') {
//     console.log('Color is red');
// } else if (color == 'blue') {
//     console.log('Color is blue')
// }else {
//     console.log('Color is not red');
// }

//Logical Operators
const name = 'Alpha';
const age = 20;

if (age > 0 && age < 12) {
    console.log(`${name} is a child`)
} else if (age >= 12 && age <=19) {
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`)
}