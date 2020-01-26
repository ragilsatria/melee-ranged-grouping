function meleeRangedGrouping(str) {
    //your code here
    if (str.length === 0) {
        return []
    }
    let splitStr  = splitData(str)

    let arrRanged = []
    let arrMeele = []
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === 'Ranged') {
            arrRanged.push(splitStr[i-1])
        }
        if (splitStr[i] === 'Melee') {
            arrMeele.push(splitStr[i-1])
        }
    }
    let arr = []

    arr.push(arrRanged)
    arr.push(arrMeele)
    return arr
}

function splitData (string) {
    let arr = ['']
    let j = 0

    for (let i = 0 ; i < string.length; i++) {
        if (string[i] === '-' || string[i] === ',') {
            arr.push('')
            j++
        }
        else {
            arr[j] += string[i]
        }
    }
    return arr
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

  console.log(meleeRangedGrouping('')); // []