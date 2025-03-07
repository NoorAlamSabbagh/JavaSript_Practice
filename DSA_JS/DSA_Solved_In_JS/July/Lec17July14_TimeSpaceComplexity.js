// Function declaration can be hoisted
// function timecomplexity() {
//     let n = 20;
//     // for (let i = 0; i <= n; i+2){//n/2
//     // for (let i = 0; i <= n*2; i++){//2n
//     for (let i = 0; i<Math.pow(2, n); i++){//2^n
//         console.log(i+1);
//     }
// }
// timecomplexity()

//
// function timecomplexity() {
//     let n = 16;
//     // for (let i = n; i>0; i--){//n
//     // for (let i = n; i>0; i-= 2){//n/2
//     // for (let i = n; i<Math.pow(2, n); i++){//Increasing exponentially of 2^n
//     // for (let i = n; i>0; i=Math.floor(i/2)){//Decreasing exponentially of logn of base2 [log₂(n)]
//     for (let i = n; i>0; i=Math.floor(i/3)){//log n base 3
//         console.log(i);
//     }
// }
// timecomplexity();

//
//some thing is increasing exponentially then log₂(n)
//  2^3= 1,2,4,8 n = 3 i.e 

//
//some thing is decreasing exponentially then
//  2^3= 1,2,4,8 n = 3 i.e 

//
//Asymptotic Notations
// const array = [30, 1, 2, 7, 10, 15, 3];
//(1)Theta Notation (Θ) — Average time complexity
//  sum of natural number = (n(n+1)/2n) = n/2 but we generally considered n so time complexity will be Θ(n)
//(2)Omega Notation (Ω) — Best fit time complexity
//  x= 30 best case Ω(1) time complexity for linear search
//(3)O(Big-Oh) — Worst time complexity
//x = 3worst case O(n) linear search

// ### **Asymptotic Notations in Time Complexity Analysis**  
// Asymptotic notations are used to describe the growth rate of algorithms in terms of input size **n**. They help in analyzing the efficiency of an algorithm.

// 1️⃣ Big-O Notation (O) — Upper Bound (Worst Case)**
// - Represents the **worst-case** time complexity.
// - It provides an **upper bound** on the growth rate of a function.
// - It tells us **how slow** an algorithm can be.

// **Example:**
// - If an algorithm runs in `O(n²)`, it means its runtime **at most** grows at a rate of `n²` for large `n`.

// **Mathematical Definition:**
// \[
// f(n) = O(g(n)) \quad \text{if} \quad \exists c, n_0 > 0 \quad \text{such that} \quad f(n) \leq c \cdot g(n) \quad \forall n \geq n_0
// \]
// ✅ **Example Complexity:**  
// - Linear Search → `O(n)`
// - Bubble Sort → `O(n²)`

// ### **2️⃣ Omega Notation (Ω) — Lower Bound (Best Case)**
// - Represents the **best-case** time complexity.
// - It provides a **lower bound**, meaning the algorithm runs at **least** this fast.
// - It tells us **how fast** an algorithm can be.

// **Mathematical Definition:**
// \[
// f(n) = \Omega(g(n)) \quad \text{if} \quad \exists c, n_0 > 0 \quad \text{such that} \quad f(n) \geq c \cdot g(n) \quad \forall n \geq n_0
// \]
// ✅ **Example Complexity:**  
// - Binary Search → `Ω(1)`
// - Merge Sort → `Ω(n log n)`

// ### **3️⃣ Theta Notation (Θ) — Tight Bound (Average Case)**
// - Represents the **average-case** time complexity.
// - It provides a **tight bound**, meaning the algorithm's runtime grows **at the same rate**.
// - It is used when an algorithm has the same upper and lower bound.

// **Mathematical Definition:**
// \[
// f(n) = \Theta(g(n)) \quad \text{if} \quad \exists c_1, c_2, n_0 > 0 \quad \text{such that} \quad c_1 g(n) \leq f(n) \leq c_2 g(n) \quad \forall n \geq n_0
// \]
// ✅ **Example Complexity:**  
// - Merge Sort → `Θ(n log n)`
// - Quick Sort (best case) → `Θ(n log n)`

// ---

// ### **4️⃣ Little-o Notation (o) — Strict Upper Bound**
// - Represents an **upper bound that is NOT tight**.
// - It means `f(n)` grows **strictly slower** than `g(n)`, but not at the same rate.

// **Mathematical Definition:**
// \[
// f(n) = o(g(n)) \quad \text{if} \quad \forall c > 0, \exists n_0 > 0 \quad \text{such that} \quad f(n) < c \cdot g(n) \quad \forall n \geq n_0
// \]
// ✅ **Example:**  
// - `o(n²)` means the function grows slower than `n²`, but is **not** exactly `Θ(n²)`.

// ---

// ### **5️⃣ Little-Omega Notation (ω) — Strict Lower Bound**
// - Represents a **lower bound that is NOT tight**.
// - It means `f(n)` grows **strictly faster** than `g(n)`, but not at the same rate.

// **Mathematical Definition:**
// \[
// f(n) = \omega(g(n)) \quad \text{if} \quad \forall c > 0, \exists n_0 > 0 \quad \text{such that} \quad f(n) > c \cdot g(n) \quad \forall n \geq n_0
// \]
// ✅ **Example:**  
// - `ω(n log n)` means the function grows **strictly faster** than `n log n`, but is **not** exactly `Θ(n log n)`.

// ---

// ### **Summary Table**
// | Notation  | Definition | Meaning |
// |-----------|------------|---------|
// | `O(f(n))`  | Upper Bound | Worst-case complexity |
// | `Ω(f(n))`  | Lower Bound | Best-case complexity |
// | `Θ(f(n))`  | Tight Bound | Average-case complexity |
// | `o(f(n))`  | Strict Upper Bound | `o(n²)` means grows strictly slower than `n²` |
// | `ω(f(n))`  | Strict Lower Bound | `ω(n log n)` means grows strictly faster than `n log n` |

// ---

// ### **Examples of Complexity Classes**
// | Complexity | Example Algorithm |
// |------------|------------------|
// | **O(1) - Constant** | Array index access |
// | **O(log n) - Logarithmic** | Binary Search |
// | **O(n) - Linear** | Linear Search |
// | **O(n log n) - Log-Linear** | Merge Sort, Quick Sort (best case) |
// | **O(n²) - Quadratic** | Bubble Sort, Selection Sort |
// | **O(2ⁿ) - Exponential** | Recursive Fibonacci |
// | **O(n!) - Factorial** | Traveling Salesman Problem (TSP) |

// ---

// ### **Conclusion**
// - **Big-O (`O`)** is most commonly used to describe worst-case performance.
// - **Theta (`Θ`)** is used when an algorithm has the same upper and lower bound.
// - **Omega (`Ω`)** is used for best-case scenarios.


//
//Linear Search
//Function decleartion is hoisted
// function linearSearch(arr) {
//     let n = arr.length;
//     let x = 100;
//     let ans = -1;
//     for (let i = 0; i < n; i++) {
//         if (arr[i] == x){
//         ans = i;
//         break;
//         }
//     }
//     console.log(`Element is present at postions ${ans}`)
// }
// const array = [30, 1, 2, 7, 10, 15, 3];
// linearSearch(array);



//
//Binary Search: Array is sorted
//
// function printPattern() {
//     let n = 5;
//     for (let i = 0; i < n; i++) { // Outer loop for rows
//         let row = ""; // Reset row for each new line
//         for (let j = 0; j < n; j++) { // Inner loop for columns
//             row += j + " "; // Append number with space
//         }
//         console.log(row.trim()); // Print full row
//     }
// }

// printPattern();//n^2


//<==================Space Complexity =====================>
// function spaceComplexity() {
//     let values = []; // Array to store inputs

//     // Taking 5 inputs from the user
//     for (let i = 0; i < 5; i++) {
//         let input = prompt(`Enter value ${i + 1}:`); // Taking input
//         values.push(input); // Storing in array
//     }

//     console.log("Entered values:");
//     values.forEach(value => console.log(value)); // Printing values
// }

// spaceComplexity();

//
// function spaceComplexity() {
//     let arr = [1, 2, 3, 4, 5]

//     let sum = 0;
//     for (let i = 0; i <arr.length; i++) {
//          sum += arr[i];
//         }
//         console.log(sum);
// }

// spaceComplexity();


//
function spaceComplexity() {
    let arr = [1, 2, 3, 4, 5]

    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j)
                product = product * arr[i];
        }
    }
    console.log(product);
}

spaceComplexity();