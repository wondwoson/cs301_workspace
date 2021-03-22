/*eslint-disable*/
/*function isSumFirstLast(num){
    let firstdigit=0;
    let lastdigit=num%10;
    for(let i=0; i<=num;i++){
        num=Math.floor(num/10);
        firstdigit=num;
    }
    let sum=firstdigit+lastdigit;
    if(sum%2===0){
        return true;
    }else{
        return false;
 }
}
console.log(isSumFirstLast(1234))
console.log(isSumFirstLast(12345));*/
function isStack(n){
    let sum=0;
    for(let i=0;i<=n;i=i+2){
        sum=sum+i;
    }
    //console.log(sumdiff)
    let sumdiff=sum-i;
    if(sum===sumdiff){
        return true;
    }else if(sum>sumdiff) {
        return false;
    }
} 
//isStack(10)
console.log(isStack(3));