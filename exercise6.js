function meleeRangedGrouping (str) {
    //your code here
    var temp = str.split(',')
    var output = [[], []]
    if(str == ''){
        return []
    }
    for(var i = 0; i < temp.length; i++){
        if(temp[i].includes('Ranged')){
            var temp2 = temp[i].split('-')
            output[0].push(temp2[0])
        } else if (temp[i].includes('Melee')){
            var temp2 = temp[i].split('-')
            output[1].push(temp2[0])
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