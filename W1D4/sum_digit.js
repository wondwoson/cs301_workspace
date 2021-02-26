const prompt=require("prompt-sync")(); 
let digit;   
    let sum = 0;
    let n=+prompt("enter number :");
    while (n) {
        digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    console.log(sum);
