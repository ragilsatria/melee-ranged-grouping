function meleeRangedGrouping (str) {
    //your code here
    if (str.length !== 0) {
        // var newStr = str + ','
        var heroType = ''
        var temp = []
        for (i = 0; i < str.length; i++) {
            if (str[i] !== ',') {
                heroType += str[i]
            } else {
                temp.push(heroType)
                heroType = ''
            }
        }
        temp.push(heroType)
        var temp3 = []
        for (j = 0; j < temp.length; j++) {
            var temp2 = []
            var hero = ''
            for (k = 0; k < temp[j].length; k++) {
                if (temp[j][k] !== '-') {
                    hero += temp[j][k]    
                } else {
                    temp2.push(hero)
                    hero = ''
                }
            }
            temp2.push(hero)
            temp3.push(temp2)
        }
        var ranged = []
        var melee = []
        for (l = 0; l < temp3.length; l++) {
            if (temp3[l][1] == 'Ranged') {
                ranged.push(temp3[l][0])
            } else {
                melee.push(temp3[l][0])
            }
        }
        return [ranged, melee]
    } else {
        return []
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
