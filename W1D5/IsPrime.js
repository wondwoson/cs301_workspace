const prompt=require("prompt-sync")();
let num = prompt("enter the number here: ");
function isPrime(num){
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
            return false;   
        }
        else {
            true;
     }
    }
}
console.log(isPrime(num));