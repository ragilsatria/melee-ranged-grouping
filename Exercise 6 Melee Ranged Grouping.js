//function meleeRangedGrouping parameternya string
//Jika input adalah string kosong ('') maka return array kosong

function meleeRangedGrouping (str) {
    var melee=[]
    var ranged=[]
    var hasil=[]
    var strSplit=str.split(',')
    var strSplitBaru=[]
    for(var i=0; i<=strSplit.length-1; i++){
        strSplitBaru.push(strSplit[i].split('-'))
    }
    for(var j=0; j<=strSplitBaru.length-1; j++){
        if(strSplitBaru[j][1]=='Melee'){
            melee.push(strSplitBaru[j][0])
        }else if(strSplitBaru[j][1]=='Ranged'){
            ranged.push(strSplitBaru[j][0])
        }else{
            return hasil=[]
        }
    }
    hasil.push(ranged,melee)
   

   return hasil

}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []