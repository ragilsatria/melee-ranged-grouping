function split(str, divider) {
    let result = [];
    let temp = '';
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === divider) {
        result.push(temp)
        temp = ''
      } else {
          temp += str[i]
        }
    }
    result.push(temp)
    return result
  }
  
  function meleeRangedGrouping(str) {
    let step1 = split(str, ',');
    let step2 = [];
    let obj = {};
    obj.Ranged = [];
    obj.Melee = [];
    
    if (str.length == 0) {
        return []
      }
    
    for (let i = 0; i < step1.length; i++) {
      step2.push(split(step1[i], '-'))
    }
      
    for (let i = 0; i < step2.length; i++) {
      for (let keys in obj) {
        if (keys == step2[i][1]) {
          obj[keys].push(step2[i][0])
        }
      }
    }
    let result = [];
    for (let keys in obj) {
      result.push(obj[keys])
    }
    return result
  }
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []