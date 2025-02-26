// 2
// 5 6
// 2 3 6 5 6
// 4 3
// 2 4 6 5

// Output:
// 2 4
// Not found


const prompt = require("prompt-sync")(); // Import prompt-sync for input

// Read number of test cases
let T = parseInt(prompt("Enter number of test cases: "));

for (let t = 0; t < T; t++) {
    // Read N (array size) and X (element to search)
    let [N, X] = prompt("Enter N and X: ").split(" ").map(Number);
    
    // Read array elements
    let arr = prompt(`Enter ${N} elements: `).split(" ").map(Number);

    // Find indices where X is present
    let result = [];
    for (let i = 0; i < N; i++) {
        if (arr[i] === X) {
            result.push(i);
        }
    }

    // Print the result
    console.log(result.length > 0 ? result.join(" ") : "Not found");
}





//
// import java.io.*; // for handling input/output
// import java.util.*; // contains Collections framework

// // don't change the name of this class
// // you can add inner classes if needed
// class Main {
//     public static void main (String[] args) {
//     Scanner sc = new Scanner(System.in);
//     int t = sc.nextInt();
//     for(int it=0; it<t; it++){
//     int n = sc.nextInt(); 
//     int x = sc.nextInt();
    
//     int[] arr = new int[n];
//     for(int i=0; i<n; i++)
//     arr[i] = sc.nextInt();

//     int count = 0;
//     for(int i=0; i<n; i++)
//     {
//         if(arr[i] == x){
//             System.out.print(i+ " ");
//             count++;
//         }
//     }

//     if(count>0)
//     System.out.println();
    
//     if(count == 0)
//     System.out.println("Not found");
    
      
//     }
//     }
// }