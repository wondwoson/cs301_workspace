/*eslint-disable*/
function secondLargest(arr){
    let firstlargest=0;
    let secondlargest=0;
    for(let i=0;i<arr.length;i++){
        if(firstlargest>arr[i]){
            secondLargest=firstlargest
            firstlargest=arr[i];
    }else if(arr[i]>secondLargest>){
        secondLargest=arr[i];
    }
}
return secondlargest;
}
console.log(secondLargest([1,2,3,4]));