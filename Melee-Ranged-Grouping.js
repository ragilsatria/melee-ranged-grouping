function meleeRangedGrouping (str) {
    var stringArrays = str.split(',')
    var output = [[],[]]

    if(str.length <= 0){
        return []
    }
    
    for(array of stringArrays){
        if(array.substr((array.indexOf('-') + 1), array.length) == 'Ranged'){
            output[0].push(array.substr(0, array.indexOf('-')))
        } else if(array.substr((array.indexOf('-') + 1), array.length) == 'Melee'){
            output[1].push(array.substr(0, array.indexOf('-')))
        }
    }

    return output
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []