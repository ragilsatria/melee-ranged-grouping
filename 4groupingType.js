function meleeRangedGrouping (str) {
    //your code here
    var arr = []
    var arr2 = []
    var temp = ''
    if(str.length === 0){
        return '[]'
    }
    for (var i = 0; i<str.length; i++){
        if(str[i] === '-'){
            arr.push(temp)
            temp = ''
        } else if (str[i] === ','){
            arr.push(temp)
            arr2.push(arr)
            temp = ''
            arr = []
        } else {
            temp += str[i]
        }
        if(i === str.length -1){
            arr.push(temp)
            arr2.push(arr)
        }
    }
    var result = []
    var ranged = []
    var melee = []
    for (var j = 0; j<arr2.length; j++){
        for(var k = 0; k<arr2[j].length; k++){
            if(arr2[j][k] === 'Ranged'){
                ranged.push(arr2[j][0])
            } else if (arr2[j][k] === "Melee") {
                melee.push(arr2[j][0])
            } 
        }
    }
    result.push(ranged, melee)
    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []