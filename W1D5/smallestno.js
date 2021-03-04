
function secoundSmallest(a,b,c){
    if(a<b && b<c || a>b && b>c){
        return b;
    }else if(a>b && a<c || a<b && a>c){
        return a;
    }
    //else if(a>b && b<c || a<b && a<c){
        return c
   // }
}
console.log(secoundSmallest(-5,8,-2));