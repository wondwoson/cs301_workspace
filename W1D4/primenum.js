const prompt=require("prompt-sync")();
let i=1;
while(i<=num){
    let num = +prompt("enter the number here: ");
    if(num/i==1 && num%2!==0){
    console.log(num+" :This number is prime");
    continue;
    i++;
}
}
    console.log(num+" :this number is not prime");
