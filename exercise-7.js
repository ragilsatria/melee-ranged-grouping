function meleeRangedGrouping (str) {

    if(str== ""){
        return []
    }
    var hasil=[]
    var temp=""
    for(var i=0;i<str.length;i++){
        if(str[i]==',' || str[i]=='-'){
            hasil.push(temp)
            temp=""
        } else{
            temp+=str[i]
        }
    }
    hasil.push(temp)

    var result=[[],[]]
    for(var j=0;j<hasil.length-1;j+=2){
        if(hasil[j+1 ] == 'Ranged'){
            result[0].push(hasil[j])
        } else if(hasil[j+1]== 'Melee'){
            result[1].push(hasil[j])
        }
       
    }
return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []