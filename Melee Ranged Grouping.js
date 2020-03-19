function meleeRangedGrouping (str) {
    if (str === ''){
        return []
    }
    let res = []
    let melee = []
    let ranged = []
    let count = 0
    let split1 = []
    let split2 = []
    let temp = ''
    let temp2 = ''

    for (var a = 0; a <= str.length; a++){
      
      
        if (str[count] !== ',' && str[count] !== undefined){
            temp += str[count]
            count++
        } else if (str[count] === undefined || str[count] === ','){
            split1.push(temp)
            temp = ''
            count++
        }
    }

    for (var b = 0; b < split1.length; b++){
        let tempArr = []
        for (var c = 0; c <= split1[b].length; c++){
            if (split1[b][c] !== '-' && split1[b][c] !== undefined){
                temp2 += split1[b][c]
            } else if (split1[b][c] === '-' || split1[b][c] === undefined){
                tempArr.push(temp2)
                temp2 = ''
            }
        }
        split2.push(tempArr)
    }

    for (var d = 0; d < split2.length; d++){
        if (split2[d][1] === 'Melee'){
            melee.push(split2[d][0])
        } else {
            ranged.push(split2[d][0])
        }
    }
    res.push(ranged)
    res.push(melee)
    
    return res
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []