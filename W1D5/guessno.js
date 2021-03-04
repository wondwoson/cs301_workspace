const prompt=require("prompt-sync")();
let lable;
let counter=0;
while(true){
    let guess=+prompt("enter guessing number ");
    counter++;
    if(guess===5 && counter===1){
        lable="Awosome";
        break;
    }
    else if(guess===5 && counter===2){
        lable="Greater";
        break
    }
    else if(guess===5 && counter===3){
        lable="Not bad";
        break;
    }
    else if(guess===5 && counter>3){
        lable=`Try Agan ${counter}`;
        break;
    
    }
        }
console.log(lable);
console.log(counter);

     