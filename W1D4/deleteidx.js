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
    function sortedArry(arr){
         temp=arr[i];
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]<arr[j]){
                    arr[i]=arr[j];
                    arr[j]=temp;
                    //newArr.push(arr[j]);    
                }
            }
        }
        return arr;
    }
    console.log(sortedArry([3,5,7,9,2,5,1]))