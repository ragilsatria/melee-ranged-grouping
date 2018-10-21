function meleeRangedGrouping (str) {
    //your code here
    let result = [[],[]]
    let splitted = str.split(',')
    let wrongWay = []
    console.log(splitted)
    //console.log(wrongWay);
    
    for(let i = 0; i < splitted.length; i++) {
        let newSplitted = splitted[i].split('-')
    console.log(newSplitted);
    
        if(newSplitted[1] === 'Ranged') {
            result[0].push(newSplitted[0])
        } else {
            result[1].push(newSplitted[0])
        }
    }
    if(str.length === 0) {
        return wrongWay
    }else{
        return result
    }
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  //console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  //console.log(meleeRangedGrouping('')); // []
  