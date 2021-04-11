"use strict";
let arr1=[1,2,3];
let arr2=[1,2,3];
/**
 * @description comparing array
 * @returns { boolean } hhh
 * @param {Array} firstarray hh
 * @param {Array} secoundArray hhhh
 */
function arrayEqual(firstarray,secoundArray){
    if(firstarray.length!==secoundArray.length){
        return false;
    }

     for(let i=0;i<firstarray.length;i++){
        if(firstarray[i]!==secoundArray[i]){
            return false;
        }
    }
return true;
}


console.log(arrayEqual(arr1,arr2));