const fs = require('fs');
let fileContent;
const someMath = 2 + 3;

try{
    fileContent = fs.readFileSync('big-filetext','utf-8');
    console.log('file has been red');
}catch(err){
    console.log('!ERRO');
}

const text = ` the num is  ${someMath}`