/*eslint-disable*/
// let temp=arr[0];
// function rotate(arr){

// let arr = [1,2,3,4,5];
// let temp=arr[0];
// for(let i=1;i<arr.length;i++){
//       arr[i-1]=arr[i];
// }
// arr[arr.length-1]=temp;

// console.log(arr);

// }
    
/*function rotateRight(arr) {
    const temp=arr[arr.length-1];
   for (let i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1];
        }
        console.log(arr)
            arr[0]=temp;
            return arr;
        }

console.log(rotateRight([1,2,3,4]));*/

/*function rotatLeftByOne(array){
    const temp =array[0];
    for(let i=0;i<array.length-1;i++){
        array[i]=array[i-1];
    }
    console.log(array);
    array[array.length-1] = temp;
    return array;
}
 console.log(rotatLeftByOne([1,2,3,4,5,6]));*/
/*let temp;
function rotateRight(arr) {
     temp=arr[0];
    arr.shift();
    arr.push(temp);
 return arr;
}
console.log(rotateRight([1,2,3,5,8,7]));
/*let copy=arr1[arr1.length-1]
function rotateRight2(arr1){
    arr1.shift();
    arr1.push(copy);
    return arr1;
}
console.log(rotateRight2(1,2,3,7));*/
    


/*function reverseArray(arr1){
    let temp=[]

    for(let i=arr1.length-1;i>=0;i--){
        //let r=arr1.reverse();
        //console.log(" "+ arr1[i]+"\t");
        console.log(temp.push(arr1));

 }
//console.log([1,2,3,99,101,404])
}
console.log(reverseArray([1,2,2,8,6]));
let arr=[1,2,3,4,3,6,9,8,7,10]
console.log(arr.splice(3,5,88))*/
let temp=arr[0];
function sorter(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<temp){
        temp=arr[i];
    }
    return arr[i];
}
    
}
console.log(sorter([1,2,3]));



