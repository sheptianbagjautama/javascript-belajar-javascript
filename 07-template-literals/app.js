const name = 'Hakim';
const age = 23;
const job = 'Web Developer';
const city = 'Cirebon';

let html;

//Tanpa template string(es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + 
'</li><li>City: '+ job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
            '<li>Name: '+ name + '</li>'+
            '<li>Name: '+ age + '</li>'+
            '<li>Name: '+ job + '</li>'+
            '<li>Name: '+ city + '</li>'+
       '</ul>'

function hello()
{
    return 'Hello';
}

//Menggunakan template string (es6)
html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>City: ${city} </li>
        <li>${5+2}</li>
        <li>${hello()}</li>
        <li>${age > 20 ? 'Anda benar Over 20' : 'Anda Salah Under 20'}</li>
    </ul>
`;

document.body.innerHTML = html;