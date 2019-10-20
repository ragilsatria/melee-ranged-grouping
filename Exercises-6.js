function meleeRangedGrouping (str) {
    //your code here
    var nameHero = []
    var classGr = []
    var grouping = {}
    var result = []
    var arr = str.split(",")
    for(let i = 0; i < arr.length; i++){
        var name = ""
        var className = ""
        
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === "-"){
                for(let k = j+1; k < arr[i].length; k++){
                    className += arr[i][k]
                }
            }
        }
        classGr.push(className)
        grouping[className] = []

        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === "-"){
                break
            } else {
                name += arr[i][j]
            }
        }
        nameHero.push(name)
        
    }

    for(let x = 0; x < classGr.length; x++){
        for(var key in grouping){
            if(key === classGr[x]){
                grouping[key].push(nameHero[x])

            }
        }
    }

    for(var nama in grouping){
        result.push(grouping[nama])
       
    }
    // grouping['Ranged'].push('Razor')
    // console.log(nameHero)
    // console.log(classGr)
    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []