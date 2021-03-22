/*eslint-disable*/
/*Q#1) Write a JavaScript function isSumOfPrimesEven that takes an array of positive integers
 as an argument and returns true if the sum of all the prime elements in the given array is even otherwise returns false. 
If the array is empty or if the array does not contain any prime element it should return false.
*/
/*function isSumOfPrimeEven(array){
    if(array.length===0) return false;
    let sum=0;
for(let i=0;i<array.length;i++){
    if(isPrime(array[i])===true){
        sum+=array[i];
    }
}
if(sum===0) return false;
if(sum%2!==0){
    false;
}
return true;
}
console.log(isSumOfPrimeEven([1,8,4,6,10,8]))
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
}*/
//console.log(isPrime(99));



/*Q#2)An array is called a perfectly odd array if every element at the odd indices of the array is also odd. 
Write a function named isPerfectlyOdd that takes an array of integers as a parameter and checks whether it is perfectly odd. 
Return false if the array is an empty array.*/
function isperfectltyOdd(arr){
        if(arr.length==0){
            return false;
        }
         for(let i=0;i<arr.length;i++){
             if(arr[i]%2!==2&&i%2!==0){
                 return false;
             }
             else if(arr[i]%2===0&&i%2!==0){
                 return false;
             }
             else if(arr[i]%2!==0&&i%2===0){
                 return false;
            //  }else if(arr[i]%2!==0&&i%2!==0){
            //      return true;
            //  }
        }
        return true;



    }

    

    }

console.log(isperfectltyOdd([0,1,2,3,4,5,6,7]));



/*

Q#3)Write a function that given an array of integers returns the sum of elements at the prime indices.
 For e.g. for an array [1,5,6,7,8,3] result would be a sum of 6+7+3=16 which are values at the prime indices of the array.*/

/*let ob1 = {id:123};
let ob2 = {id:123}
let ob3 = ob2;
let x;
if(ob1===ob2){
    x = 5;
}else if(ob1===ob3){
    x = 7;
}else{
    x =10;
}
x=5;
console.log(x); // Output?*/

let x = 5;
 
function double(x){
    x = x*2;
    console.log(x);
}
double(x);
 

 console.log(x)
  x=15;

  function findMiddleChar(str){
      if(str.length===0) return false;
      if(str.length%2!==0){
          return str.charAt(Math.floor(str.length/2));
      }
      let middleStr=str.charAt(Math.floor([(str.length/2-1)]))+""+str.charAt(Math.floor([str.length/2]));
      return middleStr;
  }
  console.log(findMiddleChar("wondnnsene"));