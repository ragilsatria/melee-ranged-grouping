function meleeRangedGrouping(str) {
    if(str.length===0) return []

    let arrRanged = []
    let arrMelee = []
    let arrResult = []

    let newArr = str.split(",")

    // Pengelompokan -Ranged
    for(let i=0;i<newArr.length;i++) {
        for(let j=0;j<newArr[i].length;j++) {
            if(newArr[i][j]+newArr[i][j+1] === '-R' && j+1 <=newArr[i].length) {
                arrRanged.push(newArr[i].replace('-Ranged', ''))
            }
        }
    }

    arrResult.push(arrRanged)

    // Pengelompokan -Melee
    for(let i=0;i<newArr.length;i++) {
        for(let j=0;j<newArr[i].length;j++) {
            if(newArr[i][j]+newArr[i][j+1] === '-M' && j+1 <=newArr[i].length) {
                arrMelee.push(newArr[i].replace('-Melee', ''))
            }
        }
        
    }
    arrResult.push(arrMelee)


    return arrResult
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []