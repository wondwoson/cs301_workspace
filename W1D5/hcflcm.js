const prompt=require("prompt-sync")();
let firstnum =prompt("enter first number here ");
let secoundnum =prompt("enter first number here ");
function computeHcf(firstnum,secoundnum){
    if(firstnum<secoundnum){
        return `${firstnum} is hcf of those number` ;
    }
    else{
        return `${secoundnum} is hcf of those number`
    } 
}
console.log(computeHcf(firstnum,secoundnum));
