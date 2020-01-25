function meleeRangedGrouping (str) {
  //your code here
    if(str === ''){return[]}
  var item = str.split(',')
  var melee =[]
  var ranged =[]
  var grup=[]
  for(var i=0; i<item.length;i++){
      grup[i] = item[i].split('-')
      if(grup[i][1]==='Melee'){
          melee.push(grup[i][0])
      }
      else if(grup[i][1]==='Ranged'){
          ranged.push(grup[i][0])
      }
  }
  return [ranged, melee]
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []