function meleeRangedGrouping(str) {
    var result = [];
    if (str[0] != null) {
        var text = "";
        var hold = [];
        var ranged = [];
        var melee = [];
        for (var i in str) {
            if (str[i] == ",") {
                hold.push(text);
                text = "";
            }
            else if (i == str.length - 1) {
                text += str[i];
                hold.push(text);
                text = "";
            } else
                text += str[i];
        }
        for (var i in hold) {
            text = "";
            var name = "";
            var type = "";
            for (var j in hold[i]) {
                if (hold[i][j] == "-") {
                    name = text;
                    text = "";
                } else if (hold[i][j] == ",") {
                    type = text;
                    text = "";
                } else if (j == hold[i].length - 1) {
                    text += hold[i][j];
                    type = text;
                    text = "";
                } else
                    text += hold[i][j];
            }
            if (type == "Ranged") {
                ranged.push(name);
            }
            if (type == "Melee") {
                melee.push(name);
            }
        }
        result.push(ranged);
        result.push(melee);
    }
    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []