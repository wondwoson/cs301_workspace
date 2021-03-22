/*eslint-disable*/
const prompt =require("prompt-sync")();//to create input data from user and put in to an array
/*let str;
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
console.log(rev);*/

/*let person1={               //obeject when not equal the see the output
    name: "Allen",
    age: 23,
    employed: true,
    }
    let person2 = {
    name: "Allen",
    age: 23,
    employed: true,
    }
    console.log(person1 === person2);
    person1.age = 35;
    console.log(person2.age);
    person2.salary = 5000;
    console.log(person1.salary)*/
    console.log("////////////////////////////////////////")

//how to find duplicate value using double loop
    /*function countDuplicate(arr) \n    
        let count=0;let temp=[]
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]==arr[j]){
                    count++;
                }
            }
        }
        return count;
    }
    console.log(countDuplicate([1,1,2,4,5,5,8,7,9,2]))*/
    let a = 5;
    let b = 7;
    console.log(a,b);
    swap1(a,b);
    console.log(a,b)
    let arr = [1,2,3];
    console.log(arr);
    swap2(arr, 0, 2);
    console.log(arr);
    function swap1(a,b){
    let temp = a;
    a=b;
    b=a;
    }
    function swap2(arr, i, j){
    let temp = arr[i];
    arr[i]= arr[j];
    arr[j]= temp;
    }
    /*function sortArray(array){
        for(let i=0;i<array.length;i++){
            let temp=array[i];
            for(let j=i+1;j<array.length;j++){
                if(array[i]<array[j]){
                    
                    array[i]=array[j];
                    array[j]=temp;
                }
            }
        }
        return array;
    }
    console.log(sortArray([1,8,7,4,2,3,4,5,61,2,6,4,7,9]))*/
    /******new task***** */
    
    /*function indexpos(arr,x){
        for(let i=0;i<arr.length;i++){
           if(arr[i]==x){
               x=i;   
           }
   }
   return x;
   }
   console.log(indexpos([1,2,3,4],4));*/

/* put integers into an array*/
   /*let arr=[];
for(let i=0;i<100;i++){
      arr.push(i)
}
console.log(arr);*/

/*function sumArryElemnt(arry){
     let sum=0;
    for(let i=0;i<arry.length;i++){
        sum=sum+arry[i];
    }
    return sum;
}
console.log(sumArryElemnt([1,5,8,7,9,4]));*/

/*let arry=[];
let score;
do{
    score =+prompt("enter score :");
    arry.push(score);
}while(score!==-1);
console.log(arry);
arry.pop();
console.log(arry)
let sum=0;
for(let i=0;i<arry.length;i++){
    sum=sum+arry[i];
}
console.log(sum);*/
/*eslint-disable*/

/*function deleteArrayElement(arry,target){
    let newArr=[]
    for(let i=0;i<arry.length;i++){
        if(i===3){
            continue
                    }else{
            newArr.push(arry[i]);
        }
    }
    return newArr

    }
    console.log(deleteArrayElement([1,2,3,4,5]));*/

    function twoCommonElmnt(arr1,arr2){
        let arr=[];
        for(let i=0;i<arr1.length;i++){
            for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                arr.push(arr2[j])
                
            }
        } 
        return arr;
    }
}
let x=[1,3,5,8,7];
let y=[7,5,9,7,1,5];
console.log(twoCommonElmnt(x,y));

    /*emp={id:102,name:"Shyam Kumar",salary:40000}  
console.log(emp.id+" "+emp.name+" "+emp.salary);
 emp.nationality="English";//---------to add property----
 delete emp.id;
 console.log(emp);
let count=0;
for(x in emp){
    count++;
}
console.log(count);




console.log(isSumOfPrimeEven([1,8,4,6,10,8]))*/
function isPrime(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i===0){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    return false;
}
console.log(isPrime());
function sumPrimeInd(arr){
    let sumatprime=0;
    for (let i=0;i<arr.length;i++){
        if(isPrime(i)===true){
            sumatprime+=arr[i];
        }
    }
    return sumatprime;
}
console.log(sumPrimeInd([1,5,6,7,8,3]));
function findnumberOfEvenValues(n) {
    let arr=[];
    let count=0;
    for(let i=2;i<=n;i++){
        if(i%2==0){
            arr.push(i);
        }
    }
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
   
}
return max;
}
console.log(findnumberOfEvenValues(29));