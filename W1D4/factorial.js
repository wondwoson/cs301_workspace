const prompt=require("prompt-sync")();
let n=+prompt("enter number: ")
let f=1;
for(let i=1 ;i<=n;i++){
    f*=i;
}
console.log(f);