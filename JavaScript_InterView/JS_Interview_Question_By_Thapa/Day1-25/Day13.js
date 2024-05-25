//(13)Return vowels in String

const countVowel = (str) => {
    let vowels = ["a", "e", "i", "o", "u"];

    let arr = str.split("");
    // console.log(arr);

    let count = 0;
    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}

console.log(countVowel("Helloo World"));//Output: 4
console.log(countVowel("The quick brOwn FOx"));//Output: 3
console.log(countVowel("Berrp"));//Output: 3