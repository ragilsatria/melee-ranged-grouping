function meleeRangedGrouping (str) {
    //your code here
    if (!str){
        return []
    }
    var ranged=[];
    var melee=[];
    str=str.split(',')
    for (weapon of str){
        weapon=weapon.split('-')
        if (weapon[1]==='Ranged'){
            ranged.push(weapon[0])
        }
        else{
            melee.push(weapon[0])
        }
    }
    var result=[]
    result.push(ranged)
    result.push(melee)
    return result

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []