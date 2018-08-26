function meleeRangedGrouping(str) {
    //your code here
    let x = str.split(',');
    let displayHero = [];
    let ranged = [];
    let melee = [];
    //console.log(x)
    if (str === '') {
        return displayHero;
    }
    for (let i = 0; i < x.length; i++) {
        let y = x[i].split('-');
        //console.log(y);
        if (y[1] === "Ranged") {
            ranged.push(y[0]);
        }
        if (y[1] === "Melee") {
            melee.push(y[0]);
        }
    }
    displayHero.push(ranged, melee);
    return displayHero;
}

// TEST CASE
//meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged')
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
//   // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []