function meleeRangedGrouping (str) {
    var result = [];
    var splitted = str.split(/-|,/);
    var melee = [];
    var ranged = [];
    
    for(var i = 1; i < splitted.length; i++){
        if(splitted[i] == "Ranged"){
            ranged.push(splitted[i-1])
        } else if(splitted[i] == "Melee"){
            melee.push(splitted[i-1])
        } 
    }
    
    if((melee.length == 0) && ranged.length ==0){
    }else{
        result.push(ranged);
        result.push(melee);
    }

    return result;
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []