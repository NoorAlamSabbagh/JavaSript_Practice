const calculatesDaysBetweenDates = (d1, d2) => {
let date1 = new Date(d1);
let date2 = new Date(d2);
// console.log(currentDate.toLocaleDateString());
// console.log(currentDate.toLocaleTimeString());

let diff = Math.abs(date2 - date1);
return diff/(24*60*60*1000);
// console.log(diff);

}


console.log(calculatesDaysBetweenDates("2024-01-01", "2024-01-31"));