function meleeRangedGrouping(str) {
    //your code here
    let res = [];

    // AUTO
    // if (str.length > 0) {
    //     let temp = str.split(/[,-]/);
    //     for (let i = 0; i < temp.length; i += 2) {
    //         if ((res[0] === undefined || res[1] === undefined) && str.length > 0) {
    //             res[0] = [];
    //             res[1] = []
    //         }
    //         temp[i + 1] === 'Ranged' ? res[0].push(temp[i]) : res[1].push(temp[i]);
    //     }
    // }

    // MANUAL
    let hero;
    let temp = '';
    for (let i = 0; i <= str.length; i++) {
        if ((res[0] === undefined || res[1] === undefined) && str.length > 0) {
            res[0] = [];
            res[1] = []
        }
        if (str[i] === '-' || str[i] === ',' || i === str.length) {
            if (temp === 'Ranged') {
                res[0].push(hero);
            } else if (temp === 'Melee') {
                res[1].push(hero);
            } else {
                hero = temp;
            }
            temp = '';
        } else {
            temp += str[i];
        }
    }

    return res;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []