const { Console } = require('console');
const fs = require ('fs');
let fileContent;
const someMath = 1 + 1;

try{
    fileContent = fs.readFileSync('big-felitext','utf-8');
    console.log('file has been')
}catch(err){
    console.log('ERRO !!!!')
}
Console.log()