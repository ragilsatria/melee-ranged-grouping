function meleeRangedGrouping (str) {
    //your code here
    if(str === ''){
        return []
    }
    var arr = str.split(',')
    var nameClass = []
    for(var x=0; x<arr.length; x++){
        var temp = arr[x].split('-')
        nameClass.push(temp)
    }
    var result = [[],[]]
    for(var x=0; x<nameClass.length; x++){
        
        if(nameClass[x][1] === 'Ranged'){
            result[0].push(nameClass[x][0])
        }
        else if(nameClass[x][1] === 'Melee'){
            result[1].push(nameClass[x][1])
        }
    }
    return result
    
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []