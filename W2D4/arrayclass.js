/*eslint-disable*/
"use strict";
/**
 * pa
 */
let score=[10,20,30,40,50];
let sum=0;
let size=score.length
function findAverage(arr){
    
    for(let i=0;i<score.length;i++){
        sum+=score[i];
        let avg=sum/size;     l
    }
}
 let avg=sum/size;
return avg;

console.log(findAverage(score));
let arr1=[1,2,3];
let arr2=[1,2,3];
function arrayEqual(firstArray,secoundArray){
    if(firstArray==secoundArray){
        return true;
    }
}
"use strict";
///let arr0=[1,2,3,4];
//let arr1=[4,3,2,1];
/**
 * 
 * @param {arr} arr 
 **/
function isPalendrom(arr){
    let copy=[];
    for(let a of arr){
        copy.push(a);
    }
    for(let i=-1;i<arr.length;i++){
        if(arr.shift()!==copy.pop(-1)){
            return false;
        }
    }
    return true;
}
console.log(isPalendrom([0,2,3,2,1]));