// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 7 - Melee Range Grouping

// Create function to group heroes according to their attack class
function meleeRangedGrouping (str) {
    arrHero = str.split(',');
    let rangedGroup = [];
    let meleeGroup = [];
    let result = [];

    if (!str) {
        return result;
    } else {
        for (let i = 0; i < arrHero.length; i++) {
            let hero = arrHero[i].split('-');
            if (hero[1] === 'Ranged') {
                rangedGroup.push(hero[0]);
            } else if (hero[1] === 'Melee') {
                meleeGroup.push(hero[0]);
            }
        }
        result.push(rangedGroup, meleeGroup);
        return result;
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []