functionmaxF(num){
    if(num<=1){
    return0;
        }
    newArr=[];
    letmax=0;
    for(leti=0;i<num;i++){
    if(num%i===0&&i%2!==0){
        newArr.push(i);
    console.log(newArr)
        }
        }
    for(letj=0;j<newArr.length;j++){
    if(newArr[j]>max){
    max=newArr[j];
        }
    returnmax;   
        }
    }
    console.log(maxF(20));
    function maxAve(arr){
        let newArr=[];
        for(let i=0;i<arr.length;i++){
        let sum=0;
        let ave=0;
        let max=0
        for(let j=0;j<arr[i].length;j++){
        sum+=arr[i][j];
        ave=(sum/arr[i].length).toFixed(2);
        if(arr[i][j]>max){
        max=arr[i][j];
         }
         }
        console.log( "["+ave+","+max+"]");
         }
        }
        maxAve([[1,2,3,4],[3,5,6],[9,4,2]]);