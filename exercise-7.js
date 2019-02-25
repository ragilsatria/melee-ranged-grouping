//Logic Challenge: Melee Ranged Grouping


function meleeRangedGrouping(str) {
    //your code here
    if (str.length > 0) {
        let newStr = str.split(',');
        let character = [];
        let melee = [];
        let ranged = [];
        let hasil = [];
        for (let i = 0; i < newStr.length; i++) {
            let temp = newStr[i].split('-');
            character.push(temp);
        }

        for (let i = 0; i < character.length; i++) {
            if (character[i][1] === "Ranged") ranged.push(character[i][0]);
            else if (character[i][1] === "Melee") melee.push(character[i][0]);
        }

        hasil.push(ranged, melee);

        return hasil;

    } else return [];




}


// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []