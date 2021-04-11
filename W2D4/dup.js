/*eslint-disable*/
"use strict";
/*function dup(ary) {
    let counter = 0;
    let distnict = [];
    let already = [];

    for (let i = 0; i < ary.length; i++) {
        if (distnict.indexOf(ary[i]) != -1 && already.indexOf(ary[i]) == -1) {
            counter++;
            already[already.length] = ary[i];
        } else {
            distnict[distnict.length] = ary[i];
        }
    }
    return counter;
}

console.log(dup([2,-1,1,4,3,1,1,9,6,6,5,-1,2]));*/


/*function findMax(ary) {
    let max = ary[0];
    for (let i = 0; i < ary.length; i++) {
        if (ary[i] > max) {
            max = ary[i];
        }
    }
    return max;
}*/

// function findSecondMax(ary) {
//     if (ary.length < 1) {
//         return ;
//     }
//     let max = ary[0];
//     let secondMax = ary[0];
//     for (let i = 0; i < ary.length; i++) {
//         if (ary[i] > secondMax) {
//             secondMax = ary[i];
//         }
//         if (secondMax > max) {
//             secondMax = max;
//             max = ary[i];
//         }
//     }
//     return secondMax;
// }

// console.log(findSecondMax([2,-1,1, 4,3,1,1,9,6,-1,2]));
function findSecondMin(ary) {
    if (ary.length < 1) {
        return ;
    }
    let min = ary[0];
    let secondMin = ary[0];
    for (let i = 0; i < ary.length; i++) {
        if (ary[i] < secondMin) {
            secondMin = ary[i];//-1
        }
        if (ary[i] > min) {
            secondMin = min;
            min = ary[i];
        }
    }
    return secondMin;
}

console.log(findSecondMin([2,-1,1, 4,-7,1,1,9,6,-4,2]));
