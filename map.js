// const myarray = [
//     {
//         title: 'python',
//         addtion: 2000,
//         publish: 1990,
//         price: 2000
//     },
//     {
//         title: 'java',
//         addtion: 2001,
//         publish: 1995,
//         price: 3000
//     },
//     {
//         title: 'javaScript',
//         addtion: 2002,
//         publish: 1999,
//         price: 4000
//     },
// ]
// const newArrya=myarray.filter((items)=>{
//     return items.price>2000

// })
const myMap=[1,2,3,4,5,6,7,8,9,10]
const mapArray=myMap
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num===101)
console.log(mapArray);
// const newMap=myMap.map((nums=>nums+10))
// console.log(newMap);