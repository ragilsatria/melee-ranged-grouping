/**
 * 7. Logic Challenge: Melee Ranged Grouping
 * ========================================
 * 
 */

function meleeRangedGrouping (str) {
    //your code here
    var hasil = []
    var result = []
    var result1 = []
    var result2 = []
    var tmp = ""

    for ( var i = 0; i < str.length; i++) {
        if ( str[i] !== "-" && str[i] !== ","){
            tmp += str[i]
        }
        if (str[i] === "-" || str[i] === "," || i === str.length-1) {
            hasil.push(tmp)
            tmp = ""
        }
    }

    for ( var i = 0; i < hasil.length-1; i++) {
        if( hasil[i+1] === "Ranged") {
            result1.push(hasil[i])
        }

        if (hasil[i+1] === "Melee") {
            result2.push(hasil[i])
        }
    }

    if ( str === "") {
        return []
    }

    result.push(result1)
    result.push(result2)

    return result

}
// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
  
  