/*eslint-disable*/


/*function findMin(arr){
    //let arr;
    let min=arr[0]
    for(let i=0;i<arr.length;i++)
        if(arr[i]<min){
        min=arr[i];
    } 
    return min;
}

console.log(findMin([1,9,7,0,-1]))
function sumOddIndices(arr){
    let sum=0;
    for(let i=1;i<arr.length;i=i+2){
    
        sum=sum+arr[i];
    }
    return sum;
}

console.log(sumOddIndices([1,3,4,6,4,7,2]));
function sumArray(arr1,arr2){
    let arr=[];
    
    for(let i=0;i<arr1.length;i++){
        arr[i]=arr1[i]+arr2[i];
    }
    return arr;
}
console.log(sumArray([1,2,3,4,5] , [5,5,4,2,1]));*/

/*function evenDominated(arr){
    let evenCount=0;let oddCount=0;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evenCount++;
        }
    }
    if(evenCount>arr.length-evenCount){
        return true;
    }
    return false;
}
console.log(evenDominated([2,3,5,8,8]));*/
//let arr1=[1,2,3];
//let arr2=[1,2,3];
/*function isArrayEqual(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false;
    }
   
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }
    return true;
}
//isArrayEqual();
console.log(isArrayEqual([1,2,4],[1,2,4]));*/

       /* function iteratnum(n){
            let fact=5;
            for(let i=1;i<n;i++){
                fact=fact*i;
            }
            return fact.toString
        }
        console.log(iteratnum(5));
        function factorial(n){
            if(n==0){
                return 1;
            }else
                return n*factorial(n-1);
        }
        console.log(factorial(5));*/
/*function addEndArray(arr){
    for(let i=0;i<arr.length-1;i++){
        arr[i]=arr[0]+arr[arr.length-1];
    }
    return arr
}
console.log(addEndArray([1,2,3,4]))
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let removed = arr.splice(0,2);
    console.log(removed);*/
/*function deleteArrayElement(arry,target){
    let newArr=[]
    for(let i=0;i<arry.length;i++){
        if(i%2==target){
            continue
                    }else{
            newArr.push(arry[i]);
        }
    }
    return newArr

    }
    console.log(deleteArrayElement([1,2,3,4,5]));*/
/*unction copyOddnumber(arr){
    let newArr2=[];
    for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        newArr2.push(arr[i]);
    }
}
return arr;
}
console.log(copyOddnumber([1,2,3,4,5,6,7,8]));*/
function countDuplicate(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;i++){
            if(arr[i]===arr[j] && i!==j){
                count++;
            }
        }
    }
    return count;
}
console.log(countDuplicate([1,1,2]))

    