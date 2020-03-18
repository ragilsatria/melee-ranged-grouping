function meleeRangedGrouping (str) {
    if (str.length <= 0) {
        return [];
    }
    const heroes = [[],[]];
    let hero = '';
    let type = '';
    let heroTypeSwitch = true; // true = hero, false = type;
    for (let i = 0; i <= str.length; i ++) {
        if (str[i] == '-') {
            heroTypeSwitch = !heroTypeSwitch;
        } else if (str[i] == ',' || str[i] == undefined) {
            heroTypeSwitch = !heroTypeSwitch;
            if (type == 'Ranged') {
                heroes[0].push(hero);
            } else if(type == 'Melee') {
                heroes[1].push(hero);
            }
            hero = '';
            type = '';
        } else {
            if (heroTypeSwitch == true) {
                hero += str[i];
            } else {
                type += str[i];
            }
        }
    }
    return heroes;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []