//////////////////////////
//  Git Branch
//////////////////////////

function meleeRangedGrouping (str) {
    if (str.length === 0) {
        return [];
    }

    let ranged = [];
    let melee = [];
    let type = [];
    let hero = str.split(",");
    let join = [ranged, melee];
    let i = 0;

    while (i < hero.length) {
        temp = hero[i].split("-");
        type.push(temp);
        i++;
    }

    for (let j = 0; j < type.length; j++)
        type[j][1] === "Ranged" ? ranged.push(type[j][0]) : melee.push(type[j][0]);
        
    return join;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []