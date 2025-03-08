//Flames Problem

function flamesProblem(arr1, arr2){
    n = arr1.length;
    m = arr2.length;

    const flames = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

    let hashCount = 0
    for(let i=0; i<n; i++){
        for(let j = 0; j<m; j++){
            if(arr1[i]=== arr2[j]){
                arr1[i] = '#';
                arr2[j] = '#';
                hashCount += 2;
                break;
            }

        }
    }
    // console.log('hashCopunt', hashCount);
    let ans = (n + m - hashCount)%6
console.log(flames[ans]);

}

const str1 = "saumya".split(''); // Corrected method to convert to array
const str2 = "ansh".split('');

flamesProblem(str1, str2);
