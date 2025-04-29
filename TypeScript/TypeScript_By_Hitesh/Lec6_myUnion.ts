let score : number | string;
score = 100;
score = "100";

type AppUser = {
    name: string;
    id: number;
}
type Admin = {
    username: string;
    id: number;
}

let hitesh : AppUser | Admin = {name: "Hitesh", id: 334};

hitesh = {username: "Hitesh", id: 334};

// function getDbId(id: number | string) {
//    //making some API calls
//    console.log(`DB id is: ${id}`);
// }

//
function getDbId(id: number | string) {
    //making some API calls
    if (typeof id === "string") {
        id = id.toLowerCase();
    }
    console.log(`DB id is: ${id}`);
 }

getDbId(3);


//array 

const data: number[] = [1, 2, 3, 4, 5];
const data2: string[] = ["1", "2", "3", "4", "5"];
const data3: (number | string)[] = [1, 2, 3, "4", "5"];
const data4: (number | string)[] = [1, 2, 3, 4, 5];
const data5: number[] | string[] = [1, 2, 3, 5];
const data6: (string | number | boolean)[] = [1, 2, "3", 4, 5, true];
const data7: any[] = [1, 2, "3", 4, 5, true];


//
let pi: 3.14 = 3.14;
// pi = 3.145; // error

///
// let seatAllotment: "aisle" | "middle" | "window";
// seatAllotment = "aisle"; //ok
// seatAllotment = "middle"; //ok
// seatAllotment = "window"; //ok
// seatAllotment = "4th"; //error