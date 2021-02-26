const prompt=require("prompt-sync")();
const pin=7;
let guessednum=+prompt("guess a number: ");
let i=0;
while(i<3){
    
i++;
}
if(guessednum===pin){
    console.log("correct,wellcome back")
}else if(guessednum!==pin){
    console.log("incorrect,try again")
    console.log("you have been disconnected")



