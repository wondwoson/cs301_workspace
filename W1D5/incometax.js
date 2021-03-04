const prompt=require("prompt-sync")();
let salary =+prompt("enter the salary :");
let tax="";
if(salary<20000){
    tax="No tax";
}
else if(salary<50000){
    tax=0.5(salary-50000);
}else{
    tax=1500+0.1*(salary-50000);
}
console.log(tax); 



