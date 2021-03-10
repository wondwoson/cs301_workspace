/*eslint-disable*/
function deleteArrayElement(arry,target){
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
    console.log(deleteArrayElement([1,2,3,4,5]));