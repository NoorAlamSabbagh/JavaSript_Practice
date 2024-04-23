//Day27: Repeat a String

const repeatString = (str, num) =>{
  return (num>0?str.repeat(num): str);
}

console.log(repeatString("Alam",3))