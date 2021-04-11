/*eslint-disable*/
function  numOfDigits(num){
let size=0;
        if (num==0)
            return 0;
    
        {
        if (num / 10 != 0){
            return size++ +parseInt(numOfDigits(num / 10));
        }
    }
}
    console.log(numOfDigits(125));