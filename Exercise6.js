function meleeRangedGrouping(str) {
    if (str === '') return [];
    let result = [];
    let ranged = [];
    let melee = [];
    let nama = '';
    for (let i in str) {
        if (str[i] === '-') {
            for (let j = Number(i) ; j >= 0; j--) {
                if (str[j - 1] === ',' || j === 0) {
                    if (str[Number(i) + 1] === 'R') ranged.push(reverse(nama));
                    else melee.push(reverse(nama));
                    nama = '';
                    break;
                }
                else nama += str[j - 1];
            }
        }
    }
    result.push(ranged, melee);
    return result;
    //your code here
}

function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []