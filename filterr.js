const products = [
    {id:1, name: 'laptop', price: 55000},
    {id:2, name: 'mobile', price: 30000},
    {id:3, name: 'watch', price: 2000},
    {id:4, name: 'camera', price: 35000}
]

const itmesPrice = products.filter(product => product.price > 30000);
const itmesName = itmesPrice.map(itemName => itemName.price);
console.log(itmesName, itmesPrice);