
const prompt=require("prompt-sync")();
for (let r = 1; r < 6; r++) {
    let row = '';
    
    for (let c = 6; c < r; c++) {
        row+= ' ' + c; 
    }
    console.log(row);
}