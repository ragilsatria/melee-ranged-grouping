function meleeRangedGrouping (str) {
  var arrHasil = [[], []]
  var pisah = str.split(',')
  var arr = []
  

  for(var i = 0; i < pisah.length;i++){
      var pecah = pisah[i].split('-')
      arr.push(pecah)
  }
  for(var j = 0; j < arr.length; j++){
      if(arr[j][1] === 'Ranged'){
          arrHasil[0].push(arr[j][0])
      }else{
          arrHasil[1].push(arr[j][0])
      }
  }
  
  return arrHasil
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []