/*eslint-disable*/
// function semiReverse(str,index){
//     if(str.length===0) return -1;
//     let firstPart=str.substring(0,index);
//     let secondPart="";
//     let j=0;
//     for(let i=str.length-1;i>index;i--){
//         secondPart+=str[str.length-1-j];
//         j++;
//     }
//     let reversed=firstPart+secondPart;
//     return reversed;
// }
// console.log(semiReverse("hello this is maharishi university",6));
// console.log(semiReverse("hello this is maharishi university",11));
// console.log(semiReverse("",6));
function print(){
    let arr=[1,2,3];
    let str="";
    for(let i=0;i<arr.length;i++){
        str+=arr[i];
            }
   let strArry=str.split('').join(",");
   let copy=[];
   arr[arr.length-1]=copy
  console.log(strArry);
}
print();

let str=["how" ,"are","you"];
console.log(str[2].reverse());

