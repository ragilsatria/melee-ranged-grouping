function meleeRangedGrouping (str) {
    
    if(str.length === 0){
        return []
    }

    var output = [[],[]]
    var split = str.split(',')

    for ( var i = 0 ; i < split.length ; i ++){
        var current = split[i]
        var name = current.split('-')[0];
        var type = current.split('-')[1];
        
        if(type === 'Ranged'){
            output[0].push(name)
        }else if(type === 'Melee'){
            output[1].push(name)
        }
    }
    return output
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []