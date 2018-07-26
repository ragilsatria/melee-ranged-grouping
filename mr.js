function meleeRangedGrouping (str) {
  //your code here
  var strNew = str.split(',')
  var hero = []
  for (var i=0;i<strNew.length; i++){
      hero.push(strNew[i].split('-'))
  }
  
  var hasil = []
  var hasil1 = []
  for(var i = 0; i < hero.length; i++) {
      if(hero[i][1] == "Ranged") {
        hasil.push(hero[i][0])
      } else {
          hasil1.push(hero[i][0])
      }
  }
  if (str.length === 0){
      return []
  }
  return [hasil,hasil1]
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []