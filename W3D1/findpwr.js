 /*eslint-disable*/
// function secondMin(arr){
//     let firstMin = Infinity;
//     let secondMin = Infinity;
//     for(let i=0;i<arr.length;i++)
//     if(arr[i]<firstMin){
//     secondMin = firstMin;
//     firstMin = arr[i];
//     } else if(arr[i]<secondMin){
//     secondMin=arr[i]
//     }else{
    
//     }
//     return secondMin;
//    }
//    let result = secondMin([0,1,2,3,2,4,4]);
//    console.log(result)

person1={
    name:"jhon",
    age:26,
    ssn:556
}
person2={
    name:"jhon",
    age:26,
    ssn:556
}
console.log(comparator(person1,person2))
function comparator(obj1,obj2){
    if(obj1.name===obj2.name && obj1.age===obj2.age){
        return true
    }
    return false;
}
// function sumArr(arr1,arr2){
//     let newArr=[];
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//         if(arr1[i]===arr2[j]){
//             newArr.push(arr2[j]);
//         }
//     }
// }
//     return newArr;
// }
// let v1=[1,2,3,4,6]
// let v2=[2,3,9,6,9,5]
// console.log(sumArr(v1,v2));
function inter(arr1,arr2){
    let newArray = []
    for(let i=0;i<arr1.length;i++){
    //newArray.push(arr2[i]+arr1[i])
    newArray[i]=arr2[i]+arr1[i]
    
    }
    return newArray
   }
   let result = inter([1,2,3,4],[7,9,12,11]);
   console.log(result)
   const prompt =require("prompt-sync")();//to create input data from user and put in to an array
let str;
let arry =[];
do{
    str=prompt("enter text here :");
    arry.push(str);
}while(str!=="");
arry.pop();
let rev = [];
console.log(arry);
for(let i=arry.length-1;i>=0;i--){
   rev.push(arry[i]);
}
console.log(rev);
 //arry=[1,8,7,4,2,3,4,5,61,2,6,4,7,9]
/*function comparator(a,b){
    if(a===b){
        return 0;
    }else if(a<b){
        return 1
    }else{
        return -1
    }
    
}
 arry=[1,8,7,4,2,3,4,5,61,2,6,4,7,9];
arry.sort(comparator);
console.log(arry.sort(comparator))
//console.log(sortArray([1,8,7,4,2,3,4,5,61,2,6,4,7,9]))*/
function deleteElmnt(arr,target){
    let arry=[];
    for(let i=0;i<arr.length;i++){
    if(arr[i]!==target){
        arry.push(arr[i]);

         }
    }
    return arry
}
console.log(deleteElmnt([1,2,3],1))