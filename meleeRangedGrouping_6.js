function meleeRangedGrouping (str) {
  //your code here
  var ranged = [];
  var melee = [];
  var pisah = str.split(',')
  // console.log(split);
    for ( var i = 0 ; i < pisah.length ; i++){
      if(pisah[i].split('-')[1]=='Ranged'){
        ranged.push(pisah[i].split('-')[0]);
      }else if(pisah[i].split('-')[1]=='Melee'){
        melee.push(pisah[i].split('-')[0]);
      }

    }
    var final =[] 
    final.push(ranged,melee)
    return final
  
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
