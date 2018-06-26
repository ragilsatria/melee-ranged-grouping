function meleeRangedGrouping (str) {
    
    if (str.length === 0) {
        return []

    } else { 
        var arr= str.split(',')

        var result= []
        var Ranged= []
        var Melee= []

        for (var i= 0; i<arr.length; i++) {
                
            if (arr[i].search('Ranged') !== -1) { 
                var x= arr[i].replace('-Ranged','')       
                Ranged.push(x)
            }
            
            if (arr[i].search('Melee') !== -1) {
                var y= arr[i].replace('-Melee','')  
                Melee.push(y)
            }               
        }    
        result.push(Ranged)
        result.push(Melee)

        return result
    }    
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []