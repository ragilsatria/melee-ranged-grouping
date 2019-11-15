function meleeRangedGrouping (str) {
    let grouped = [];
    let output = [[],[]];
    let splitted = str.split(',')
    if(str.length===0){return []}
    
    for(let i = 0; i<splitted.length; i++){
        grouped.push(splitted[i].split('-'))
    }

    for(let i=0; i<grouped.length; i++){
        if(grouped[i][1][0] === 'R'){
            output[0].push(grouped[i][0])
        } else {
            output[1].push(grouped[i][0])
        }
    }
    return output;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []