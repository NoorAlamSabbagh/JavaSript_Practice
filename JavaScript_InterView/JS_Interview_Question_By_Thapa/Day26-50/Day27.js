//Day27: Repeat a String

const repeatString = (str, num) =>{
  return (num>0?str.repeat(num): str);
}

console.log("Day27",repeatString("Alam",3))