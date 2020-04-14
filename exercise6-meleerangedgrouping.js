// Exercise 6 Melee Ranged Grouping
function meleeRangedGrouping(str) {
    if (str.length === 0) {
        return [];
    } else {
        var hero = [
            [],
            []
        ];
        for (let i = 0; i < str.length; i++) {
            if (i === 0 || (str[i - 1] && str[i - 1] === ',')) {
                var name = '';
                let j;
                for (j = i; j < str.length; j++) {
                    if (str[j] === '-') {
                        break;
                    }
                    name += str[j];
                }
                var type = '';
                for (j = j + 1; j < str.length; j++) {
                    if (str[j] === ',') {
                        break;
                    }
                    type += str[j];
                }
            }
            var kembar = false;
            for (let k = 0; k < hero.length; k++) {
                for (let l = 0; l < hero[k].length; l++) {
                    if(hero[k][l] === name){
                        kembar = true;
                    }
                }
            }
            if (!kembar) {
                if (type === 'Ranged') {
                    hero[0].push(name);
                } else {
                    hero[1].push(name);
                }
            }
        }
        return hero;
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []