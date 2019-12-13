function meleeRangedGrouping(str) {
    //your code here
    if (str.length == 0) {
        return []
    }
    var temp = ''
    var arrayMelee = []
    var arrayRange = []
    var pisah = []
    var wrap = [arrayRange, arrayMelee]
    for (i = 0; i <= str.length; i++) {
        if (str[i] !== ',' && str[i] !== '-' && i !== str.length) {
            temp += str[i]
        } else {
            pisah.push(temp)
            temp = ''
        }
    }
    for (j = 0; j < pisah.length; j++) {
        if (pisah[j + 1] == 'Ranged') {
            arrayRange.push(pisah[j])
        } else if (pisah[j + 1] == 'Melee') {
            arrayMelee.push(pisah[j])
        }
    }
    return wrap
}
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []