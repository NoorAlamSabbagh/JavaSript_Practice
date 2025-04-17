// function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         console.log('i', i)
//         console.log('n', n);
//       if (n % i === 0) return false;
//     }
//     return true;
//   }
// //   isPrime(7); // true
// //   isPrime(10); // false
  
//   function getPrimeCombos(input) {
//     const str = input.toString();
//     const primes = new Set();

//     //Looping through all contiguous substrings
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j <= str.length; j++) {
//           const subStr = str.slice(i, j);
//           const subNum = parseInt(subStr, 10);
//           if (isPrime(subNum)) {
//             primes.add(subNum);
//           }
//         }
//       }
//     //Printing the Output
//     if (primes.size === 0) {
//         console.log("Output: No prime combo");
//       } else {
//         console.log("Output:");
//         [...primes].sort((a, b) => a - b).forEach(p => console.log(p));
//       }
//     }

//     getPrimeCombos(359);
//     getPrimeCombos(446);

///////////////////////////////////////////////////////////////////////////
// first person 	 K				
						
// 	Queue	Next in line				
// 	P	M				
// 	K	U				
// 	R	No one				
// 	M	R				
// 	U	P				
						
						
// 	corect order 	K	U	P	M	R


const nextMap = {
    P	: "M",				
	K	: "U",				
	R	: null,				
	M	: "R",				
	U	: "P",
	A   : "B",
	Y   : "A",
	B   : null
}

// const firstPerson = "K";
// const queue = [];

// let current = firstPerson;

// while(current){
//     queue.push(current);
//     current = nextMap[current];
// }

// console.log(queue);

//

/////////////////////////////
const nextPeople = new Set(Object.value(nextMap).filter(Boolean));

const startingPoint = Object.keys(nextMap).filter(p => !nextPeople.has(p));

const buildQueue = (start) => {
    const queue = [];
    let current = start;
    
    while(current){
       queue.push(current);
       current = nextMap[current];
    }
    return queue;
}

const queue1 = buildQueue(startingPoint[0]);
const queue2 = buildQueue(startingPoint[1]);

console.log(queue1);
console.log(queue2);

































