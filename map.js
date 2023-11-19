const doubleIt = [1, 2, 3, 4, 5, 7].map(x => x * 5);
console.log(doubleIt)


const products = [
    {id:1, name: 'laptop', price: 55000},
    {id:2, name: 'mobile', price: 30000},
    {id:3, name: 'watch', price: 2000},
    {id:4, name: 'camera', price: 35000}
]
const items = products.map(product => product.name);
console.log(items)