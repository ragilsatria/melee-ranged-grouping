function meleeRangedGrouping (str) {
    //your code here
    var kata= []
    var temp = ''
    if(str.length === 0){
      return []
    }
    for(var i=0; i<str.length; i++){

      if(str[i] !== ','){
        temp += str[i]
      } else{
        if(temp !== 0){
          kata.push(temp)
        }
        temp = ''
      }
    }
    if(temp !== 0){
        kata.push(temp)
    }

    var result =[[],[]]
    
    // console.log(kata)
    for (let i = 0; i < kata.length; i++) {
        var kataBaru = ''
        var baru = ''
        for (let j = 0; j < kata[i].length; j++) {
            if(kata[i][j] !== '-' ){
                kataBaru += kata[i][j]
                if(j === kata[i].length -1){
                    if(kataBaru === 'Ranged'){
                        result[0].push(baru)
                    }
                    else{
                        result[1].push(baru)
                    }
                }
            }else if(kata[i][j] === '-'){
              baru = kataBaru
              kataBaru = ''
            }
        }
    }
    // console.log(result)
    return result
   
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []