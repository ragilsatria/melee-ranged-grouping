function meleeRangedGrouping (str) {
    if(str.length === 0){
        return []
    }else{

        var listHero = str.split(',');
    
        var result = [];
    
        for( var i = 0; i < listHero.length;i++){
            var temp = listHero[i].split('-');
            result.push(temp)
        }
    
        var obj = {
            Ranged : [],
            Melee : []
        };
    
        for( var j = 0; j < result.length;j++){
            if(obj.Ranged === undefined || obj.Melee === undefined){
               obj[result[j][1]].push(result[j][0])
            }else{
                obj[result[j][1]].push(result[j][0]) 
            }
        } 
        return Object.values(obj);
    }
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []