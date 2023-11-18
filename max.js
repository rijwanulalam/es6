const arr1 = [20, 30, 40, 50, 50, 20, 220, 30];
const arr2 = [220, 440, 40, 50, 60, 2000, 220, 119];

const findMax = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    const max = Math.max(...newArr);
    return max;
}

const result = findMax(arr1, arr2);
console.log(result);