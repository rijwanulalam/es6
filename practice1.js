const a = 4;
const b = 17;
let count = 0;
for (let i = a; i <= b; i++){
    if(i !== 5 && i / 5 != 0){
        count++;
    }
}

console.log(count);