
const prompt=require("prompt-sync")();
let credeit=prompt("enter crediet hour of the course ");
let name=prompt("enter the name of the student ")rr
let label;
if(credeit>90){
label="Senior";
}else if(credeit>60){
label="Junior";    
}else if(credeit>30){
label="Sophomor";   
}else if(credeit>0){
label="Freshman";    
}
console.log("the stdents name is:" +name);
console.log("the stdents label is: "+label);

