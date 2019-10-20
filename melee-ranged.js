function meleeRangedGrouping (str) {
    let out = [[],[]]
    return Grouping(str, out)           
}
function Grouping (str, result) {
    let target = str.split(',')
    if(target.length < 1 || str == ''){
        return []
    }
    else{
        if(target[0].split('-')[1] == 'Ranged'){
            let hero = target[0].split('-')
            result[0].push(hero[0])
        }
        if(target[0].split('-')[1] == 'Melee'){
            let hero = target[0].split('-')
            result[1].push(hero[0])
        }
        var param = target.slice(1).join(',')
        Grouping(param, result)   
    }
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []