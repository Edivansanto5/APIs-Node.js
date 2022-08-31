const fs = require ('fs');
const someMath = 1 + 1;

fs.readFile('big-file.text','utf-8',function(err,content){
    if(err){
        return console.log(err)
    }
    console.log(content)
});
   
const text = ` A soma dos numero é ${someMath}`;
console.log(text)