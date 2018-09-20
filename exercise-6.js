function meleeRangedGrouping (str) {
    var arr = str.split(',');
    var rangedHero = [];
    var meleeHero = [];
    for(var i = 0 ; i<arr.length; i++) {
        arr[i] = arr[i].split('-');
        if (arr[i][1]==='Ranged') {
            rangedHero.push(arr[i][0]);
        } else if (arr[i][1]==='Melee') {
            meleeHero.push(arr[i][0]);
        }
    }
    var output = [rangedHero,meleeHero];
    return output;
    
}
  
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []