const a = [1,2];
const b = [1];
const arrayDiff = (a,b) => {
    const diff = a.filter(x => !b.includes(x));
    return diff;
}

console.log(arrayDiff(a,b));

// const dif1 = [1,2,3,4,5,6].diff( [3,4,5] );  
// console.log(dif1);