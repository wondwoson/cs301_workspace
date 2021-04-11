/*eslint-disable*/
emp={id:102,name:"Shyam Kumar",salary:40000}  
console.log(emp.id+" "+emp.name+" "+emp.salary);
delete emp.id;
 emp.nationality="English";
 console.log(emp);
let count=0;
for(x in emp){
    count++;
}
console.log(count);
str="hello";
newStr=str.split("");
console.log(newStr);

 