/*eslint-disable*/
const prompt=require("prompt-sync")();
//let fname=prompt("enter name :");
let arry=[];
let fname;
let sum=0;
let num;
function sumAverage(){
    let num=+prompt("enter you name :")
    for(let num of arry){
        arry.push(num);
        sum=sum+num;
} 
return sum;
}  
//let average=sum/arr.length
sumAverage();
console.log(sum);
