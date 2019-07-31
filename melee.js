function meleeRangedGrouping (str) {
    //your code here
    var result=[];
    if(str.length===0)return result;
    var str = str.split(",");
    
    var ranged=[];
    var melee=[];
    
    for(var i = 0;i<str.length;i++){
        var tmp=str[i].split("-");
        
        if(tmp[1]==="Ranged"){
            ranged.push(tmp[0]);
        }else {
            melee.push(tmp[0]);
        }
    }
    result.push(ranged);
    result.push(melee)
    return result;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []