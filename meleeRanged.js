function meleeRangedGrouping(str) {
    //your code here
    var tampung = []
    if (str == false) {
        return tampung
    }
    var tmp = ''
    var ranged = []
    var melee = []
    var tmpArr = []
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '-') {
            tmpArr.push(tmp)
            tmp = ''
        } else if (str[i] == ',') {
            tmpArr.push(tmp)
            tampung.push(tmpArr)
            tmp = ''
            tmpArr = []
        } else {
            tmp += str[i]
        }
    }
    tmpArr.push(tmp)
    tampung.push(tmpArr)

    for (var j = 0; j < tampung.length; j++) {
        if (tampung[j][1] == 'Ranged') {
            ranged.push(tampung[j][0])
        } else if (tampung[j][1] == 'Melee') {
            melee.push(tampung[j][0])
        }
    }

    var display = []
    display.push(ranged)
    display.push(melee)
    return display
}
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []