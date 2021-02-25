
const prompt=require("prompt-sync")();
let costofhouse=parseInt(prompt("enter cost  of the house "));
let downpayment;
if(costofhouse>200000){
downpayment==5000 + 0.1(costofhouse-200000);
}else if(costofhouse>100000 && costofhouse<200000){
downpayment==2000+0.15(costofhouse-100000);    
}else if(costofhouse>50000 && costofhouse<100000){
downpayment==1000+0.1(costofhouse-50000);   
}else if(costofhouse>0 && costofhouse<50000){
    downpayment=0.05*costofhouse;
}


console.log("the exepected downpayment is: "  +"$"+ downpayment);