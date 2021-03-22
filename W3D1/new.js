/*eslint-disable*/
function isprime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return true
    }
    else return false;
}
// console.log(isprime(5));
function isLargestFactor(num) {
    let arr = [];
    if (num <= 1) {
        return false;
    }
    let sum=0;
    for (let i = 2; i <= num; i++) {
        if (isprime(i) && num % i === 0) {
            sum+=arr[i]
            arr.push(i);
        }
    }
    avg=sum/arr
    
    return avg;
}
console.log(isLargestFactor(10));


// function longestWord(str){
//      str="the quick brown fox jumps over the lazy dog";
//      strArr=str.split(" ");
//      console.log(strArr)
//       let longest=" ";
//      for(let word of strArr){
//          if(word.length > longest.length){
//              longest=word;
//          }
//          return longest;

//      }
// }
//console.log(longestWord("the quick brown fox jumps over the lazy dog"))
// function suffixOfString(str1,str2){
//     let suffix=" ";
//         for(let i=str1.length-1;i>=0;i--){
//             if(str1.charAt(i)===str2.charAt(i)){
//                 suffix+=str1.charAt(i)+" ";
     
//             }
            
//         }
//         console.log(suffix)
//         let suffixNew="";
//             for(let i=suffix.length-1;i>=0;i--){
//                 suffixNew+=suffix.charAt(i);
//             }
//         return suffixNew;
//     }
//     console.log(suffixOfString("blowing","walking"));
