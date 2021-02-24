//converting volume in quarts to litters
const prompt=require("prompt-sync")();
// let liters=parseFloat(prompt("enter the volume in quarts: "));
// const quarts= 0.94635295;
// let volume=quarts*liters;
// console.log('the volume in litters is :'+volume);
// //converting distance in killometr to mile
// const fact=1.609344;
// let distinkillo=parseFloat(prompt("enter distance in killometr :"));
// let distinmile=distinkillo/fact;
// console.log("distance in mile is "+distinmile);
// //number of box in each stack
// let totalnumberofbox=parseFloat(prompt("enter total number of boxes: "));
// let numberofboxesinstack=parseFloat(prompt("enter number of box in each stack :"));
// let numberstack=totalnumberofbox/numberofboxesinstack;
// console.log(Math.ceil(numberstack));
//gallon usage per mile
let beginingodometr=parseFloat(prompt("enter begining odometr reading: "));
let endingodometr=parseFloat(prompt("enter ending odometer reading: "));
let numberofgallon=parseFloat(prompt("enter number of galloneading:"));
let milepergallon=(endingodometr-beginingodometr)/numberofgallon;
console.log("mileage of the vehicle per galon is :"+milepergallon)



