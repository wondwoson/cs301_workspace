/*eslint-disable*/
function countDuplicate(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
    }
    return count;
}
console.log(countDuplicate([1,1,2,4,5,5,8,7,9,2]))

console.log("mesay")