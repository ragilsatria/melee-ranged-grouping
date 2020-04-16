function meleeRangedGrouping (str) {
    //your code here
    var semiFinal=[];
    if(str.length<1){
        return semiFinal;
    } else{
        var strBaru=''

        for(var i=0; i<str.length; i++){
            if(str[i]==='-'){
                var tmp=[];
                tmp.push(strBaru);
                strBaru=''
                continue;
            }
            if(str[i]===','){
                tmp.push(strBaru);
                semiFinal.push(tmp);
                strBaru='';
                continue;
            }

            strBaru+=str[i];

            if(i==str.length-1){
                tmp.push(strBaru);
                semiFinal.push(tmp);
            }
        }

        var final=[];
        var ranged=[];
        var melee=[];
        for(var i=0; i<semiFinal.length; i++){
            if(semiFinal[i][1]=='Ranged'){
                ranged.push(semiFinal[i][0]);
            } else if(semiFinal[i][1]=='Melee'){
                melee.push(semiFinal[i][0]);
            }
        }

        final.push(ranged);
        final.push(melee);

        return final;
    }
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []