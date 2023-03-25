const fs=require('fs');

const text=fs.readFileSync('read.txt','utf-8',function(error,data){
    fs.writeFile('write.txt',data,function(error){
        if (error){
            console.log(error);
        }
    });
});
console.log(text);
fs.writeFileSync('write.txt',text);