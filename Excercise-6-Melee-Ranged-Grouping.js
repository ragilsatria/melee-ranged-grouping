function meleeRangedGrouping (str) {
  //your code here
  var temp = [];
  var ranged = [];
  var melee = [];
  var result = [];
  
  if(str.length === 0){
    return result;
  }
  
  str = str.split(',');
  
  for(var i=0;i<str.length;i++){
    temp = str[i].split('-');
    if(temp[1] === 'Ranged'){
      ranged.push(temp[0]);
    }
    else{
      melee.push(temp[0]);
    }
  }
  result.push(ranged,melee);
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
