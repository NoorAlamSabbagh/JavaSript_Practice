// const score = 400;
// const balance = new Number(100);
// // console.log(balance)
// console.log(typeof 'balance.toString()')

// console.log(Math);
// console.log(Math.abs(-4))
// console.log(Math.ceil(4.5))
// console.log(Math.floor(4.5))
// console.log(Math.random()*10)

// const min = 10;
// const max = 20;

// myArr = [1,2,3,4,5,6,7,8,9]
// // const myn1 = myArr.slice(1,3);
// const myn1 = myArr.splice(1,3);
// console.log(myn1)


const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

