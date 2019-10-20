function meleeRangedGrouping (str) {
    //your code here
    var arr = str.split(',');
    var tempRanged = [];
    var tempMelee = [];
    var final = [];
    if(arr.length < 2){
        return []
    }
    for(i = 0 ; i < arr.length ; i++){
        var temp = arr[i].split('-');
        if(temp[1] == 'Ranged'){
            tempRanged.push(temp[0]);
        } else if(temp[1] == 'Melee'){
            tempMelee.push(temp[0]);
        }
    }
    final.push(tempRanged, tempMelee);
    return final
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []