function meleeRangedGrouping (str) {
    
    var group = [];
    var holderArray = [];
    var holder = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] === '-'){
            holderArray.push(holder);
            holder = '';
        } else if(str[i] === ','){
            holderArray.push(holder);
            group.push(holderArray);
            holderArray = [];
            holder = '';
        } else{
            holder += str[i];
        }
    }
    holderArray.push(holder);
    group.push(holderArray);

    var result = [];

    var melee = [];
    var ranged = [];

    for(var j = 0; j < group.length; j++){
        if(group[j][1] === 'Melee'){
            melee.push(group[j][0]);
        } else if(group[j][1] === 'Ranged'){
            ranged.push(group[j][0]);
        }
    }

    if(melee.length === 0 && ranged.length === 0){
        return result;
    } else{
        result.push(ranged, melee);
    }
    return result;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []