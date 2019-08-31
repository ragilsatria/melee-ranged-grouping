function meleeRangedGrouping (str) {
    //your code here
    var groups = []
    var temp = ''
    var hero = []
    var type = []
    var grouping = []
    var ranged = []
    var melee = []
  
    if(str.length === 0){
      return []
    }
  
    for(var i = 0; i<str.length; i++){
      if(str[i] !== ',' && str[i] !== '-'){
        temp += str[i]
      }else{
        groups.push(temp)
        temp = ''
      }
    }
    groups.push(temp)
  
    for(var i = 0; i<groups.length; i++){
      if(i % 2){
        type.push(groups[i])
      }else{
        hero.push(groups[i])
      }
    }
  
    for(var i = 0 ; i<hero.length; i++){
      grouping.push([hero[i],type[i]])
    }
  
    for(var i = 0; i<grouping.length; i++){
      // console.log(output[i][1])
      if(grouping[i][1] === 'Ranged'){
        ranged.push(grouping[i][0])
      }else{
        melee.push(grouping[i][0])
      }
    }
    return [ranged,melee]
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []