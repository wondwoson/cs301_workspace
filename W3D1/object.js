/*eslint-disable*/

function reverseAll(str) {
    str="wondwoson Ambaba";
    let stringArray = str.split('');
    let reversed = [];
    for (let i = stringArray.length - 1; i >=0; i--) {
         reversed.push(stringArray[i]);
    
     }
     
     return reversed.join(",");
      
    }

 console.log(reverseAll());

// function reverseAll(){
// const prompt=require("prompt-sync")();
// let str;
// let arry =[]
// do{
//     str=prompt("enter text here :");
//     arry.push(str);
// }while(str!=="stop");
// arry.pop();
// let rev = [];
// console.log(arry);
// for(let i=arry.length-1;i>=0;i--){
//    rev.push(arry[i]);
// }
// console.log(rev);
//  }


// function checktwoNum(x,y){
//      if(x+y===100){
//          return true
//      }else
//      return false

//     }
// console.log(checktwoNum(5,100))
// function checkExtension(str){
//     if(str.lastIndexOf(".")){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(checkExtension("indexhtml"))
// function addString(str){
//      str="";
//     if(str.includes("new!")){
//         return str; 
//     }
//     else if(!str.includes("new!")){
//         return "new! "+ `${str}`
//     }
// }
// console.log(addString("year"));
// let sentence="how are you";
// let words=sentence.split(" ");
// console.log(words);
// let char=sentence.split("");
// console.log(char);
// let hyphenated=words.join(" mr")
// console.log(hyphenated)
// let oneword=words.join("")
// console.log(oneword)