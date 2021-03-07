/*eslint-disable*/
function  getMiddle(arr1) {
    let result;
    if(result==arr1[(arr1.length-1)/2]){
        return result;
    }
    else{
        result=result + arr1[(((arr1.length-1)/2)+1)]
    return result;
}
}
console.log(getMiddle([1,2,3,4,5,6]));