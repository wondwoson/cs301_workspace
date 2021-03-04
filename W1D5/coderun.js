
// let num=7
// let sum=0;
// for(let i=1;i<num;i++){
//     if(num%i===0){
//         sum=sum+i;
//     }
// }
//     if(sum===num){
//         console.log("number is pn")
//     }else{
//         console.log("not pn");
//     }
const prompt=require("prompt-sync")();
let age;
while(age<40){
    let age=+prompt("enter age :");
    i++;
}
if(age<20){
    console.log("young")
}else {
    console.log("adult")
}