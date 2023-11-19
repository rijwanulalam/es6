// const numbers = [1, 2, 3, 4, 5];
// const total = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
// // console.log(total);

// const totall = numbers.reduce((previousValue, currentValue) => {
//     return  previousValue + currentValue
//     }, 0);

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    sum += number;
}
console.log(sum);

const total = numbers.reduce((x, y) => x + y, 0);
    console.log(total)