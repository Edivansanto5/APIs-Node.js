const fs = require ('fs');
let fileContent;
const someMath = 1 + 1;

try{
    fileContent = fs.readFileSync('big-felitext','utf-8');
    console.log('arquivo foi lido')
}catch(err){
    console.log('ERRO !!!!')
}
const text = ` A soma dos numero é ${someMath}`;
console.log(text)