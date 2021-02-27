const prompt=require("prompt-sync")();
//let r=+prompt("enter radius of circle: ");
let r;
let h;
let area;
function areaCircle(r){
    r=+prompt("enter radius of circle: ");
    let area=Math.PI*Math.pow(r,2);
    return `the area of the the circle is ${area}`
} 
console.log(areaCircle());
function volumeCylinder(r,h){
    r=+prompt("enter radius of circle: ");
     h=+prompt("enter height of cynder: ");
     //let area;
    let volume =Math.PI*Math.pow(r,2)*h;
    return `the volume the cylnder is  ${volume}`;
}
console.log(volumeCylinder());