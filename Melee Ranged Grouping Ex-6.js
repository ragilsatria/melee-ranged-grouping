function meleeRangedGrouping (str) {
  if (str == ''){
    return []
  }  
  var temp = str.split(',')
    var hasil = []  
    var ranged = []
    var melee= []
    var hasilOk = []
    for(var i = 0 ; i < temp.length ; i++){
      hasil.push((temp[i]).split('-'))
    }
    for ( var j = 0; j < hasil.length; j++ ){
      if(hasil[j][1] === 'Ranged'){
        ranged.push(hasil[j][0])
      }
      else if(hasil[j][1] === 'Melee'){
        melee.push(hasil[j][0])
      }

    }
    hasilOk.push(ranged, melee)

    return hasilOk

  //your code here

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []