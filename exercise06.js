function meleeRangedGrouping (str) {
    if (str.length > 0) {
        var arr = str.split(",");
        var output = [[], []];
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("-");
            if (arr[i][1] === "Ranged") {
                output[0].push(arr[i][0]);
            } else if (arr[i][1] === "Melee") {
                output[1].push(arr[i][0]);
            } else {
                return "Invalid input";
            }
        }
        return output;
    } else {
        return [];
    }
}

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []