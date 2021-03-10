/*eslint-disable*/
const prompt=require("prompt-sync")();
//let car={};
let car={
    make:"toyota",
    model:"camery",
}
/*car.make="toyoyta";
car.model="camery";
console.log(car.make);
console.log(car.model);
car.model="Rav4";
console.log(car.model);*/
/*for (const key in car) {
    console.log(key);
    console.log(car[key]);
        
    }*/
/*let countproperties=0;
function  countProperties(car){
     car={
        make:"toyota",
        model:"camery",
    }
    car.countProperties;
    countProperties++;
    console.log(countProperties);
}
countProperties();
console.log(countProperties(car));*/
let str = 'As sly as a lottery as strong  an ox';

let target = 'lottery'; // let's look for it
let target1="prize";

let pos = 0;
let i=0;
while (true) {
  let foundPos = str.indexOf(target,target1, pos);
  console.log("no spam")
  if (foundPos == -1) break;


  console.log( "spam" );
  pos = foundPos + 1; // continue the search from the next position
  i++;
  
}
