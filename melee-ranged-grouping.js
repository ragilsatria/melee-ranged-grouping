function meleeRangedGrouping (str) {
    //your code here
    var arrStr = str.split(',')
    var ranged = []
    var melee = []
    var hasil = []
    for(var i = 0; i < arrStr.length; i++){
      var grup = arrStr[i].split('-')
      // console.log(grup)
      if(grup[1] === 'Ranged'){
        ranged.push(grup[0])
      }
      else if(grup[1] === 'Melee'){
        melee.push(grup[0])
      }
    }
    hasil.push(ranged, melee)
  
    if(str === ''){
      return []
    }
    else{
      return hasil
    }
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []