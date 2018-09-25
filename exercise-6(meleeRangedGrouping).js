function meleeRangedGrouping (str) {
    var char = str.split(',');
    var role = [];
    var hasil = [ [], [] ];
    for (let i = 0; i < char.length; i++) {
        role = char[i].split('-');
        if (role[1] === 'Ranged') {
            hasil[0].push(role[0]);
        }
        else {
            hasil[1].push(role[0])
        }
    }
    if (!str) {
        return []
    }
    return hasil;
} 
  
// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
console.log(meleeRangedGrouping('')); // []