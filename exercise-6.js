function meleeRangedGrouping (str) {
    //your code here
    let result=[];
    if(str.length===0){
      return result
    }

    let string = str.split(",");
    
    let ranged=[];
    let melee=[];
    
    for(let i = 0;i<string.length;i++){
        let arrayName=string[i].split("-");
        
        if(arrayName[1]==="Ranged"){
            ranged.push(arrayName[0]);
        }else {
            melee.push(arrayName[0]);
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