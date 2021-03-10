/*eslint-disable*/
const prompt =require("prompt-sync")();
let str;
let arry =[];
do{
    str=prompt("enter text here :");
    arry.push(str);
}while(str!=="");
arry.pop();
console.log(arry);
let rev = [];
for(let i=arry.length-1;i>=0;i--){
   rev.push(arry[i]);
}

console.log(rev);