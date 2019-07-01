function meleeRangedGrouping(str) {
    //your code here
    if (str === "") {
        return [];
    }

    var tempArray = str.split(",");
    var meleeGroup = [];
    var rangedGroup = [];
    for (var i=0; i<tempArray.length; i++){
        var temp = tempArray[i].split("-");
        if(temp[1] === "Ranged"){
            rangedGroup.push(temp[0])
        } else {
            meleeGroup.push(temp[0])
        }
    }
    return [rangedGroup,meleeGroup]

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []