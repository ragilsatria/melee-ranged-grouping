function meleeRangedGrouping (str) {
    if(str == '') return []
    var x = str.split(',')
    var split=[]
    
    for(var i = 0; i < x.length; i++){
        split.push(x[i].split('-'))
    }
    
    var result = [], ranged = [], melee = []
    for( var i = 0; i < split.length; i++){   
        if(split[i][1] === 'Ranged'){
            ranged.push(split[i][0])
        } 
        if(split[i][1] === 'Melee'){
            melee.push(split[i][0])
        }
    }
    result.push(ranged, melee)
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []