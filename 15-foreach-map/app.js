//For
const cars = ['Honda', 'Toyota', 'Daihatsu', 'Ford' ];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

//Foreach 
// cars.forEach(function(car, index, array){
//     console.log(`${index}: ${car}`);
//     console.log(array);
// });

//MAP
/**
 * dengan menggunakan map variabel const dapat dirubah
 */
// const users = [
//     {id: 1, name: 'Alex'},
//     {id: 2, name: 'Bella'},
//     {id: 3, name: 'Carl'},
//     {id: 4, name: 'Daniel'},
// ];

// const ids = users.map(function(user){
//     return user.id
// });

// console.log(ids);

const user = {
    firstName: 'Alex',
    lastName: 'Gordon',
    age: 49
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}