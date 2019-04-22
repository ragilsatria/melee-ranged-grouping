function meleeRangedGrouping(str) {

    var arr = str.split(",");
    var result = [];

    var type = ["Ranged", "Melee"];

    for (var j = 0; j < type.length; j++) {

        var tampung = [];
        for (var i = 0; i < arr.length; i++) {
            if (type[j] == arr[i].split("-")[1]) {
                tampung.push(arr[i].split("-")[0])
            }
        }
        result.push(tampung)
    }


    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// //   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []