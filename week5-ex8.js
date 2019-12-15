
function meleeRangedGrouping (str) {
    //your code here
    if (str == ""){
        return [];
    }

    str = str.split(",")
    temp = []
    
    for (var i = 0; i < str.length; i++){
        temp.push(str[i].split("-"))
    }

    res = [[],[]]
    for (var i = 0; i < temp.length; i++){
        if (temp[i][1] === "Ranged"){
            res[0].push(temp[i][0])
        } else if (temp[i][1] === "Melee"){
            res[1].push(temp[i][0])
        }
    }

    return res
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []