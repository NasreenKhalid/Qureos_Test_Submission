let str = "Test";
let obj ={};
for(let s of str)
if(!obj[s])obj[s] = 1;
else obj[s] = obj[s]  + 1;
console.log(obj)