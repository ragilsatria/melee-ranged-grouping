function meleeRangedGrouping (str) {
    var results = [[],[]];

    var heroName = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '-' && str[i] !== ',') {
            heroName += str[i];
        } else if (str[i] === '-') {
            if (str[i + 1] === 'R') {
                results[0].push(heroName);
                i += 6
            } else {
                results[1].push(heroName);
                i += 5
            }
            heroName = '';
        }
    }
    return results;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []