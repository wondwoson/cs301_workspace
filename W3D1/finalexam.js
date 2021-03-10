/*eslint-disable*/
const prompt =require("prompt-sync")();//to create input data from user and put in to an array
let str;
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
console.log(rev);

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