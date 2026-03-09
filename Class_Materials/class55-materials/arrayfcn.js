const items = [
    { name: 'Bike', price: 100},
    { name: 'TV', price: 200},
    { name: 'Album', price: 10},
    { name: 'Book', price: 5},
    { name: 'Phone', price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25},
]

const filteredItems = items.filter((item)=>{
    return item.price<=100
})

const mapItems = items.map((item)=>{
    return item.name
})

const found = items.find((item)=>{
    return item.name = 'Book'
})

items.forEach((item)=>{
    console.log(item.name)
})

const hasInexpensiveItems = items.some((item)=>{
    return item.price <=100
})

const hasAllInexpensiveItems = items.every((item)=>{
    return item.price <=100
})

const total = items.reduce((currentTotal, item)=>{
    return item.price +currentTotal
}, 0)

const newItems = [1,2,3,4,5];

const includesTwo = newItems.includes(2);

console.log(items);
console.log(filteredItems);
console.log(mapItems);
console.log(found);
console.log(hasInexpensiveItems);
console.log(hasAllInexpensiveItems);
console.log(total);
console.log(includesTwo);