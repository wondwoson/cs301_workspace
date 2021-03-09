/*eslint-disable*/
const prompt=require("prompt-sync")();
/*function findSecondMax(ary) {
    if (ary.length < 1) {
        return ;
    }
    let max = ary[0];
    let secondMax = ary[0];
    for (let i = 0; i < ary.length; i++) {
        if (ary[i] > secondMax) {
            secondMax = ary[i];
        }
        if (secondMax > max) {
            secondMax = max;
            max = ary[i];
        }
    }
    return secondMax;
}

console.log(findSecondMax([2,-1,1, 4,3,1,1,9,6,-1,2]));*/
function findMin(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
console.log(findMin([1,-5,8,7,-1,6]));
while(true){
    let input=prompt("enter text: ");
    if(input.toUpperCase===stop){
        break;
    }
}