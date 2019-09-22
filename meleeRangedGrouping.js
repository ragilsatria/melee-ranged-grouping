function meleeRangedGrouping (str) {
  //your code here
  if(str == '') return []
  var arr = str.split(',');
  var ranged = [];
  var others = [];
  for(let i=0; i<arr.length; i++) {
  	arr[i] = arr[i].split('-');
  	if(arr[i][1] == 'Ranged') {
  		ranged.push(arr[i][0])
  	} else {
  		others.push(arr[i][0])
  	}
  }
  return [ranged, others];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []