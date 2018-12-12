function meleeRangedGrouping(str) {
    if (str.length === 0) {
        return []
    } else {
        var result = []
        var melee = []
        var ranged = []
        var check = false
        var temp = str.split(',')
        var heroWithRole = []
        for (var i = 0; i < temp.length; i++) {
            heroWithRole.push(temp[i].split('-'))
        }
        for (var j = 0; j < heroWithRole.length; j++) {
            if (heroWithRole[j][1] === 'Ranged') {
                ranged.push(heroWithRole[j][0])
            } else if (heroWithRole[j][1] === 'Melee') {
                melee.push(heroWithRole[j][0])
            }

        }
        result.push(ranged, melee)
        return result
    }
}

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []