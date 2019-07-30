/* function meleeRangedGrouping(str) {
     if (str.length === 0) {
        return []
    };
    let melee = [];
    let ranged = [];
    //Split one big string into array
    let group = str.split(',');
    let placeHolder = [];
    //What the result would be
    let result = [ranged, melee];
    //Split grouped string into array
    for (let i = 0; i < group.length; i++) {
        temp = group[i].split('-');
        placeHolder.push(temp);
    }
    //Group heroes based on index 1 of said heroes.
    for (let i = 0; i < placeHolder.length; i++) {
        if (placeHolder[i][1] === 'Ranged') {
            ranged.push(placeHolder[i][0]);
        }
        if (placeHolder[i][1] === 'Melee') {
            melee.push(placeHolder[i][0]);
        }
    }
    return result; 

} */

// Refactor
function meleeRangedGrouping(str) {
    let melee = str.split(',').filter(x => x.match('Melee')).map(y => y.replace(/([A-Za-z\s]+)-\w+/, '$1'))
    let ranged = str.split(',').filter(x => x.match('Ranged')).map(y => y.replace(/([A-Za-z\s]+)-\w+/, '$1'))
    return str.length === 0 ? [] : [ranged, melee]
}
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []