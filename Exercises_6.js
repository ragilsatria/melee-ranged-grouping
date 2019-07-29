function meleeRangedGrouping (str) {
    //your code here
    var heroes = str.split(',');
    var hero = []; 
    var heroRanged = [];
    var heroMelee = [];
    var res = [];
    
    if (str === '') {
        return [];
    }
    
    // Split hero & weapon type
    for (let i = 0; i < heroes.length; i++) {
        hero.push(heroes[i].split('-'));
    }
    // console.log(hero);
    
    // Grouping the hero based on the weapon type
    for (let j = 0; j < hero.length; j++) {
        if (hero[j][1] === 'Melee') {
            heroMelee.push(hero[j][0]);
        } else if (hero[j][1] === 'Ranged') {
            heroRanged.push(hero[j][0]);
        }
    }
    
    res.push(heroRanged, heroMelee);
    
    return res;
}

// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []