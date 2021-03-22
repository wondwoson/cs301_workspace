/*eslint-disable*/
const prompt=require("prompt-sync")();
/*function findMiddleChar(str){
    if(str.length===0) return false;
    if(str.length%2!==0){
        return str.charAt(Math.floor(str.length/2));
    }
    let middleStr=str.charAt(Math.floor([(str.length/2-1)]))+""+str.charAt(Math.floor([str.length/2]));
    return middleStr;
}
console.log(findMiddleChar("hailemariamo"));
*/
//1. What will be the output of running following JavaScript code?
 
/*for(let i = 1; i <= 2; i++){
     for (let j = 0; j <= 4; j = j + 2){
       console.log(i * j) }
     }
     */
     /*2. Define an array to be sum-safe if none of its elements is equal to the sum of its elements. 
     The array a = {5, -5, 0} is not sum-safe because the sum of its elements is 0 and a[2] == 0. However, the array a = {5, -2, 1} is sum-safe because the sum of its elements is 4 and none of its elements equal 4. Write a function named isSumSafe that returns true if its argument is sum-safe, otherwise it returns false. For example, isSumSafe([5, -5, 0]) should return false and isSumSafe([5, -2, 1]) should return true. 
     Return false if the array is empty.*/
    /*function isSumSafe(arr){
        if(arr.length==0){
            return false;
        }
        if(isSum(2)==arr[2]){
            return false;
        }
        return true;

    }
    console.log(isSumSafe([]));
    function isSum(arr){
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum=sum+arr[i]
        }
        return sum;
    }
    console.log(isSum([]));
    */
    /*An OneTwoOne array is defined as an array that has 1 as first and last elements and rest of the elements of the array are 2. 
    Write a function isOneTwoOne that takes an array as parameter and returns whether the given array is OneTwoOne array or not. Input Output [1,2,2,1] True [1,2,2,2,2,2]
     False (because last element is not 1) [1,2,2,3,2,1] False (because of 3*/

        /*function isOneTwoOne(arr){
            for(let i=0;i<arr.length;i++){
                if(arr[0]===1 && arr[arr.length-1]===1){
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        console.log(isOneTwoOne([1,2,1,5,6]));*/
    //    let b = 0;
/*function bar(n) {
 let a = 5;
 if (n >= 0) {
 n = Math.sqrt(n)
 }
 b = a + n;
 console.log(a, b, n);
}
console.log(b);
bar(4);
console.log(b);
console.log(n);*/
           /*function findlargest(arr){
            let largest=arr[0];
               for(let i=0;i<arr.length;i++){
                if(arr[i]>largest){
                    largest=arr[i];
                }  
                
            }
            return largest;
        }
     console.log(findlargest([1,2,3]));*/
/*function findlargest(a,b,c){
    if(a<b && b<c || a>b && b>c){
        return c;
    }else if(a>b && b>c || a>b && b<c){
        return a
    }else if(a<b && b>c || a>b && b>c){
        return b;
    }else if(a===b ||b===c || a===c){
        return a
    }
}
console.log(findlargest(3,4,-2));*/
              /*function evenindicesSum(arr){
                  let sum=0;
                  for(let i =2 ;i<arr.length;i=i+2){
                      sum=sum+arr[i];
                  }
                  return sum;

                  }
                  console.log(evenindicesSum([1,2,3,5,9,7]));*/

 /*let newArr=[];
 let str="";
 function sunString(arr){
      
    
      do{
          str=prompt("enter the text :");
          newArr.push(str);
      }while(str.length!==0);
      newArr.pop();
      console.log(newArr);
      let sum=0;
      for(let i=0;i<newArr.length;i++){
          sum+=newArr[i].length;
      }
      let average=sum/newArr.length
      console.log(average);

    }
    console.log(sunString(newArr));

   
  //console.log(averageLengthOfChar([wond]))    */
 
  //function fillArray(myArry){
     myArry=[];
    count=0;
   
    /*function sumTwoArray(arr1,arr2){
        let resultAray=[];
        for(let i=0;i<arr1.length,arr2.length;i++){
            if

            resultAray[i]=arr1[i]+arr2[i];
        
        }
        return resultAray
    }
    console.log(sumTwoArray([1,2,3],[2,2,9,3,5]))*/
    /*let arr2=[];
    let arr4=[];
    let arr=[1,2,5,6];
    for(let i=0;arr.length;i++){
    arr2.push(arr.shift());
    }
    let revered=[];
    for(let i=arr.length-1;i>0;i--){
        revered.push(arr.pop());
    }
    console.log(arr2)
    console.log(revered)*/

 //w3d1 Q5
function suffix(str1,str2){
    let count=0;
    let n;
    if(str1.length>=str2.length){
        n=str1.length;
    }else{
        n=str2.length;
    }
    for(let i=1;i<n;i++){
    if(str1.charAt(str1.length-i)===str2.charAt(str2.length-i)){
        count++;
    }
}
    if(count>=2&&str1.length>str2.length){
        return str1.substring(str1.length-count,str1.length)
    }else{
        return str2.substring(str2.length-count,str2.length)
    }
}
// console.log(suffix("swimming","wing" ));
// console.log(suffix("json","jrson" ));
// function twoCommonElmnt(arr1,arr2){
//     let arr=[];
//     for(let i=0;i<arr1.length;i++){
//         if()

//         if(arr1[i]==arr2[i]){
//             arr.push(arr1[i])
//         }  
//         return arr;    
            
//         }
//     } 
// console.log(twoCommonElmnt[1,3,5,8,7],[7,5,9,7,1])
function fillArray(newArr,Max){
    for(let i=0;i<100;i++){
        let max;
        let r=Math.floor(Math.random() * max)
        newArr.push(r);   
    }
        return newArr;
    }
    console.log(fillArray([],5));