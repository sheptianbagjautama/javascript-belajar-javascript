let val;

//inisialisasi untuk mengambil date
const today = new Date();

//mengedeit tanggal dan juga jam
let birthday = new Date('8-16-1994 23:30:25');

//mengubah format penamaan tanggal
birthday = new Date('Augustus 16 1994');
birthday = new Date('8/16/1994');

val = today.toString();

//mengambil tahun
val = today.getFullYear();

//mengambil bulan
val = today.getMonth();

//mengambil tanggal sekarang
val = today.getDate();

//mengambil jam
val = today.getHours();

//mengambil menit
val = today.getMinutes();

//mengambil detik
val = today.getSeconds();

//mengambil milisecond
val = today.getMilliseconds();

//mengambil waktu
val = today.getTime();

//set tanggal
birthday.setDate(20);

//set bulan
birthday.setMonth(2);

//set tahun
birthday.setFullYear(1995);

//set jam
birthday.setHours(12);

//set menit
birthday.setMinutes(20);

//set second
birthday.setSeconds(50);

console.log(birthday);
