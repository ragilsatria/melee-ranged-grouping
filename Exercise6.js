function meleeRangedGrouping (str) {
    //your code here
    hasil = []
    rangedArr = []
    meleeArr = []
    tmp = ''
    tmp2 = ''
    if(str.length != 0){
        for(i=0;i<str.length;i++){
            
            if(str[i] == '-'){
                for(j=i+1;j<str.length;j++){
                    tmp2 += str[j]
                    if (str[j+1] == ',' || str[j+1] == undefined){
                        if(tmp2 == 'Ranged'){
                            rangedArr.push(tmp)
                            tmp = ''
                            tmp2 =''
                            i = j+1  
                            break;
                        }
                        else if(tmp2 == 'Melee'){
                            meleeArr.push(tmp)
                            tmp = ''
                            tmp2 =''
                            i = j+1 
                            break;
                        }
                    }
                }
            }
            else{
                tmp += str[i]
            }
        }
        hasil.push(rangedArr)
        hasil.push(meleeArr)
        return hasil
    }
    else{
        return hasil
    }
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []