/*eslint-disable*/
//Q4)
const prompt =require ("prompt-sync")();
while(true){
    let input=prompt("enter input here: ")
        if(input==="stop"){
            break;
        }
    }
//Q5)
for(let i=0;i<100;i++){
    if(i%3==0 && i%5==0){
        console.log("FooBar");
    }else if(i%3==0){
        console.log("Foo")
    }else if(i%5==0){
        console.log("Bar");
    }else{
        console.log(i);
    }
}
//Q6)
    let numberofitem=+prompt("enter number of item ");
    let sumprice=0;
    let discount;
    let amountcharged;
    for(let i=0;i<numberofitem;i++){
        let price=+prompt("enter price of items ");
        sumprice=sumprice+price;
        console.log("the total price is :" + sumprice);
    }
    if(sumprice>99){
        console.log("price after discount is: " + (sumprice-0.1*sumprice));
    }else{
        sumprice;
    }
//Q7)
 function isSumFirstLast(num){
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
    console.log(isSumFirstLast(12345));
//Q8) 
   console.log(isSumFirstLast(12345));
    function isStack(n){
        let sum=0;
        for(let i=0;i<=n;i++){
            sum++;
        }
        if(sum===n){
            return true;
        }else if(sum>n) {
            return false;
        }
    } 
    isStack(10)
    console.log(isStack(10));
//Q9)
function computeBill(unit){
    if(unit<50){
        return unit*1.5-0.1*unit*1.5;
    }else if(unit<150){
        return (50*1.5+(unit-50)*1.8);
    }else {
        return (50*1.5+(unit-50)*1.8+(unit-150)*2+0.05*unit)
    }
}
console.log(computeBill(48));
