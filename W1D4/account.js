const prompt=require('prompt-sync')();


const PIN = '1234';
let counter = 0;
while (counter < 3) {
    let p = +prompt("Enter Pin");
    if (p == PIN) {
        console.log("correct,well come back");
        return;
    }
    console.log(`Please try again, you have ${2 - counter} trial left`);
    counter++;
}
console.log("Sorry but you have been locked out ");