function meleeRangedGrouping (str) {
    var koma = str.split(',');
    var result = [[],[]];
    for(var i = 0; i<koma.length; i++){
        var strip = koma[i].split('-');            
        if(strip[1] === 'Ranged'){
            result[0].push(strip[0]);
        } else if (strip[1] === 'Melee') {
            result[1].push(strip[0]);
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