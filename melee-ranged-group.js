function meleeRangedGrouping (str) {
    //your code here
    var heroes = [];
    var type = [];
    var objResult = {};
    var temp = '';
    for(var i =0; i < str.length; i ++) {
        if(str[i] !== '-' && str[i] !== ',') {
            temp += str[i];
        } else if(str[i] === '-') {
            heroes.push(temp);
            temp = '';
        } else if(str[i] === ',') {
            type.push(temp);
            temp = '';
        }
    }
    type.push(temp);
    var result = [[],[]]

    for(var i = 0; i < type.length; i ++) {
        if(type[i] === 'Ranged') {
            result[0].push(heroes[i]);
        } else if(type[i] === 'Melee') {
            result[1].push(heroes[i]);
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