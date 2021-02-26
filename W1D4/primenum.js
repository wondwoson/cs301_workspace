const prompt=require("prompt-sync")();
let num = prompt("enter the number here: ");
for(let i=2;i<=num/2;i++){
    if(num%2==0){
        console.log(num+" :This number is not prime");    
    }
}
 console.log(num+" :this number is prime");