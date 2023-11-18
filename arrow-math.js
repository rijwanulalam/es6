const numbers = [2, 3, 4, 5, 6, 7, 8];

const averageOfSquare = numbers => {
    let sum = 0;
    for (const number of numbers){
        const squareNum = Math.pow(number, 2);
        sum += squareNum;
    }
    const average = (sum / numbers.length);
    return average;
}
const result = averageOfSquare(numbers);
console.log(result)