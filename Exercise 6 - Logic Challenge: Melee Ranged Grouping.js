function meleeRangedGrouping (str) {
  var result = [[],[]];
  var hero = [];
  var spl1 = str.split(',');
  for(var i=0 ; i<spl1.length ; i++){
    hero.push(spl1[i].split('-'))
  }
  if(str==0){
    return[]
  }else{
  for(var j=0 ; j<hero.length ; j++){
    if(hero[j][1]=='Ranged'){
      result[0].push(hero[j][0])
    }else{
      result[1].push(hero[j][0])
    }
  }
  return result
  }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []