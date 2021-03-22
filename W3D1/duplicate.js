/*eslint-disable*/
// function semiReverse(str,index){
//     if(str.length===0) return -1;
//     let firstPart=str.substring(0,index);
//     let secondPart="";
//     let j=0;
//     for(let i=index;i<str.length;i++){
//         secondPart+=str[str.length-1-j];
//         j++;
//     }
//     let reversed=firstPart+secondPart;
//     return reversed;
// }
// console.log(semiReverse("hello this is maharishi university",6));
// console.log(semiReverse("hello this is maharishi university",11));
// console.log(semiReverse("",6));

// function negatingArray(array){
//     if(array.length===0||array.length%2!==0) return false;
 
//     for(let i=0;i<array.length;i+=2){
//         let x=array[i]
//         if(array[i]===array[i+1]){
//             x=array[i]*-1
//             return true;
//         }
//     }
// }
// console.log(negatingArray([-3,3,2,-2,7,-7,-8,8]))
// console.log(negatingArray([1,-1,1]))
// console.log(negatingArray([]));
// function collateWords(arr){
//     let wrapper = [];  //array holding the arrays of same length words
//     /* for each words get length and then push into the array of element n.  check for first time and initial if necessary */
//     for (const word of arr) {
//         const length = word.length;
//         let sameSize = wrapper[length]; 
//         if (sameSize === undefined) {
//             sameSize = []; 
//             wrapper[length] = sameSize;
//         }
//         sameSize.push(word);
//     }
//     return wrapper;
// }
// console.log(collateWords(["how","are","youman"]));
obj={
    name:"wond",
    age:25
}