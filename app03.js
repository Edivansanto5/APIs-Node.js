const fs = require('fs');
const someMath = 1+1;

fs.readFile('big-file.txt', 'utf-8', function (err, content) {
    if (err) {
        return console.log(err)
    }
    console.log(content)
});

const text = `A resposta é  ${ someMath }`;
console.log(text);