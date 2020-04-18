function meleeRangedGrouping(str) {
    //your code here

    if (str.length < 1) {
        return [];
    }

    let split = (str, delimiter) => {
        let arr = [];
        let el = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] === delimiter) {
                arr.push(el);
                el = '';
            } else {
                el += str[i];
            }
            if (i === str.length - 1) {
                arr.push(el);
            }
        }
        return arr;
    };

    let arr = split(str, ',');

    let result = [[], []];
    for (let i = 0; i < arr.length; i++) {
        let els = split(arr[i], '-');
        if (els[1] === 'Ranged') {
            result[0].push(els[0]);
        } else if (els[1] === 'Melee') {
            result[1].push(els[0]);
        }
    }

    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
