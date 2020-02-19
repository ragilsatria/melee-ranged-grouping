meleeGrouping = str => {

    if (!str) {return [];}

    str = str.split(',');
    let cache = [], hero = [];
    // str = str.reduce((hero,group) => {
    for (let h in str) {
        cache = str[h].split('-');
        // SHORTCUT ..... nguantukkk poolll 06/02/2020 00:31:17
        let n = (cache[1] == 'Ranged') ? 0:1;
        hero[n] = hero[n] || [];
        hero[n].push(cache[0]);
    }
    // },{})

    return hero

}

// TEST CASE

console.log(meleeGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeGrouping('')); // []