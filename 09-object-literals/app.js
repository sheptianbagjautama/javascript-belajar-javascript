const person = {
    firstName: 'Steve',
    lastName : 'Job',
    age: 22,
    email: 'steve@job.com',
    hobbies: ['music','sports'],
    address:{
        city: 'Arizona',
        zipcode: '86029'
    },

    getBirtYeah: function(){
        return 2018 - this.age;
    }
}

let val;

val = person;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.zipcode; //memanggil objek dalam objek lagi
val = person.address['city'];
val = person.getBirtYeah();




console.log(val);