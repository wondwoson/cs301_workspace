const prompt=require("prompt-sync")();
let weather=prompt("enter weather type today :");
let footwear=" ";
if(weather==="hot"){
    footwear="sandal";
}else if(weather==="rain"){
    footwear="galoshis";
}
else if(weather==="snow"){
    footwear=boots;
}else{
    footwear="sneaker";
}
console.log(footwear);