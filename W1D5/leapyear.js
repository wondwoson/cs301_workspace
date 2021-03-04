
const prompt=require("prompt-sync")();
/*let leapyear=prompt("enter the year : ");
if(leapyear%4===0){
    if(leapyear%400===0 ){
        console.log("it is leapyear: ")

    }else{
        console.log()
    }
}else{
    console.log("not leap yea");
}*/
let num=+prompt("enter number: ");
let sum=1;
for(let i=2;i<num;i++){
    if(num%i===1){
        sum=sum+i;
    }
    if(sum===num){
        console.log("number is pn")
    }else{
        console.log("not pn");
    }
    
}
//console.log(sum===num);
