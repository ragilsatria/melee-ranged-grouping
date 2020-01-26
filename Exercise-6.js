function meleeRangedGrouping (str) {
  if(str === '') return []
  var arr = str.split(',')
  var result = [[], []];
  for(var i=0; i<arr.length; i++){
    var temp = '';
    if(arr[i].search('Ranged') !== -1){
      temp = arr[i].substr(0, arr[i].search('Ranged')-1);
      //console.log(temp);
      result[0].push(temp);
    }else if(arr[i].search ('Melee') !== -1){
      temp = arr[i].substr(0, arr[i].search('Melee')-1);
      result[1].push(temp)
    }
  }
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
