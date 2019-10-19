function meleeRangedGrouping (str) 
{
    console.log('\n', '\n', '-------------------------------------');
    
    var groupSplit = str.split(',')
    var groupRanged = []
    var groupMelee = []
    var newGroup = []


    function groupingRecursion (data)
      {
          var heroName = ''
          var heroRole = ''
        
          if (data.length === 0)
            {
                newGroup.push(groupRanged, groupMelee)
                return newGroup
            }
          else
            {
                var splitterIndex = data[0].search('-')
                
                heroName = data[0].slice(0,splitterIndex)
                heroRole = data[0].slice(splitterIndex+1, data[0].length)
                // console.log(heroName)
                // console.log(heroRole)
                
                if (heroRole === 'Ranged')
                  {
                      groupRanged.push(heroName)
                  }
                else if (heroRole === 'Melee')
                  {
                      groupMelee.push(heroName)
                  }  
                
                return groupingRecursion (data.slice(1))
            }
      }
    
    if (str.length === 0)
      {
          return newGroup
      }
    else
      {
          return groupingRecursion(groupSplit)
      }

}
  
  
  
  
  
  
  
  
  
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []