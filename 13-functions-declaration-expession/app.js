/**
 * mengenal function declaration dan expression
 */


 /**
  * ini adalah function declaration
  * bisa dipanggil sebelum dan sesudah function dibuat
  *  */  
 function greet(firstName = 'Sheptian', lastName = 'Bagja'){
    //  console.log(`Hello ${firstName}`);
    {
        // if (typeof firstName === 'undefined') { firstName = 'Sheptian' }
        // if (typeof lastName === 'undefined') { lastName  = 'Bagja' }
        return `Hello, ${firstName} ${lastName}`;
    }
    
 }


/**
 * function expression
 * tidak dapat dipanggil sebelum function itu dibuat
 */

 console.log(greet('Steve', 'Smith'));

 const square = function(x = 8){
     return x * x;
 }

 console.log(square());

 //IIFEs
(function(name) {
    console.log(`Hello ${name}`)
})('Stackoverflow');
 


 