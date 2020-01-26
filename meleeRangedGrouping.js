function splitting(str, splitter){
    var temp = '';
    var result = [];
    for(var i = 0; i < str.length; i++){
      if(str[i] === splitter){
        result.push(temp);
        temp = '';
      }else{
        temp += str[i];
      }
    }
    result.push(temp);
    return result;
  }
  
  function grouping(array){
    var ranged = [];
    var melee = [];
    for(var i = 0; i < array.length; i++){
      if(array[i][1] === 'Ranged'){
        ranged.push(array[i][0]);
      }else if(array[i][1] === 'Melee'){
        melee.push(array[i][0]);
      }
    }
    return [ranged, melee]
  }
  
  function meleeRangedGrouping (str) {
    if(str === ''){
      return [];
    }
    var array1 = splitting(str, ',');
    for(var i = 0; i < array1.length; i++){
      array1[i] = splitting(array1[i], '-')
    }
    var result = grouping(array1);
    return result;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []