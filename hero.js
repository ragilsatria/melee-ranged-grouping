function meleeRangedGrouping(str) {
    if(str === '') {
      return []
    }
    var hero = [
      [],
      []
    ];
    var array = [];
    var temp = '';
    
    for(var i = 0; i < str.length; i++) {
      if(str[i] !== '-' && str[i] !== ',') {
        temp += str[i]
      } else if(str[i] === '-' || str[i] === ',') {
        array.push(temp);
        temp = ''
      }
    }
    array.push(temp)
  
    for(var j = 0; j < array.length - 1; j++) {
      if(array[j+1] === 'Ranged') {
        hero[0].push(array[j]);
      } else if(array[j+1] === 'Melee') {
        hero[1].push(array[j]);
      }
    }
    
    return hero;
  }
  
  //TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  [['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe']]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
  