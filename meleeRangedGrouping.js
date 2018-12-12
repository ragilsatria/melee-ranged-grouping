function meleeRangedGrouping(str) {
    if (str === '') {
        return [];
    }
    let datas = str.split(',');
    let rangeds = [];
    let melees = [];
    for (let i = 0; i < datas.length; i++) {
        let currentLine = datas[i].split('-');
        if (currentLine[1] === 'Ranged') {
            rangeds.push(currentLine[0]);
        } else if (currentLine[1] === 'Melee') {
            melees.push(currentLine[0]);
        }
    }
    return [rangeds, melees];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
