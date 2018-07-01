function meleeRangedGrouping (str) {
    if(str.length === 0){
        return '[]'
    }
    //your code here
    var potong = str.split(',');
    var result = [];
    
    for(var i = 0; i < potong.length; i++){
        result.push(potong[i].split('-'))   
    
    var malee = [];
    var ranged = [];
    }
    for(var j = 0; j < result.length; j++){
        if(result[j][1] === 'Ranged'){
            ranged.push(result[j][0])
        }else if (result[j][1] === 'Melee'){
            malee.push(result[j][0])
        }

        
    }
return [ranged, malee]  
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []