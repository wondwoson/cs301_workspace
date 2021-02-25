const prompt=require("prompt-sync")();
let status=+prompt("enter the staus of the borrowe");
let loandurationinweek;
if(status=="student" && numberofbookoverdue==0){
    loandurationinweek=6;
}
else if(status=="student" && numberofbookoverdue<3){
    loandurationinweek=4;
}
else if(status=="student" && numberofbookoverdue>=3){
    loandurationinweek=2;
}else if(status=="Faculty" && numberofbookoverdue==0){
    loandurationinweek=12;
}else if(status=="faculty" && numberofbookoverdue){
    loandurationinweek=10;
}else if(status=="faculty" && numberofbookoverdue){
    loandurationinweek=8;
}else if(status=="other" && numberofbookoverdue==0){
    loandurationinweek=4;
}else if(status=="other" && numberofbookoverdue<3){
    loandurationinweek=3;
}else if(status=="other" && numberofbookoverdue>=3){
    loandurationinweek=2;
}
console.log(loandurationinweek);