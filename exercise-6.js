function meleeRangedGrouping (str) {
    //your code here
    var hasil =[];
    if(str.length===0){
        return hasil
    }
    var char =[];
    var type=[]
    var tampung='';
    for (let i = 0; i < str.length; i++) {
        if(str[i]==='-'){
            char.push(tampung);
            tampung='';
        }else if (str[i]===','){
            type.push(tampung)
            tampung='';
        }else{
            tampung+= str[i];
        }
    }
    type.push(tampung)
    var ranged =[]
    var melee =[]
    for (let i = 0; i < char.length; i++) {
        if(type[i]==='Ranged'){
            ranged.push(char[i])
        }else{
            melee.push(char[i])
        }
    }
    hasil.push(ranged,melee)

    return hasil;

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []