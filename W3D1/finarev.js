/*eslint-disable*/
// function dupChar(str){
//     let strArr=str.split("");
//     let dup=[];
//     let compare=[];
//     let count=0;
//     for(let char of strArr){
//             if(!compare.includes(char)){
//                 compare.push(char);
//             }else {
//                 dup.push(char);
//                 console.log(char + count++ )
//             }
//     }
//       return dup + ` found ${count} duplicates`;
// }
// console.log(dupChar("wondwoson"));
function tocapCase(str){
    strArry=str.toLowerCase().spilit(" ");
    console.log(strArry);
    for(let i=0;i<strArry.length;i++){
       strArry[i]=strArry[i][0].toUpperCase()+strArry[i].slice(1);
    }
    return strArry.join(" ");
}
tocapCase("the quick brown fox jumps over the lazy dog");