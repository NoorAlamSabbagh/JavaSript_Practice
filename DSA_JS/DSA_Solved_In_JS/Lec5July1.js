//
//(1)
// function add(a,b){
//     return a+b;
// }
// function sizeOfClass(){
//     return 100;
// }

// function message(){
//     return "Welcome to JavaScript";
// }

// function dynamicMessage(msg){
//     return msg;
// }
// console.log(add(10,50));
// console.log(sizeOfClass());
// console.log(message());
// console.log(dynamicMessage("Hello"));

//
//(2)

function evenNumber(num){
    for(let i=1;i<=num;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
evenNumber(10);

