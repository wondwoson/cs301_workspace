/*eslint-disable*/
function findPower(b,p){
if(n=0){
    return 1;
}else{
    return b*findPower(b,p-1)
}
}
console.log(findPower(2,3));