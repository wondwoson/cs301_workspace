/*eslint-disable*/
const prompt=require("prompt-sync")();
let num = prompt("enter the number here: ");
for(let i=2;i<=num/2;i++){
    if(num%i==0){
        console.log(num+" :This number is not prime"); 
        return true;   
    }
    else {
        false
    }
}
 console.log(num+" :this number is prime");