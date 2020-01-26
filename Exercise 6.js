function meleeRangedGrouping (str) {
  if (str.length == 0) {
    return ''
  }

  newArr = singleSplit(str, ',')
  rangedArr = [];
  meleeArr = [];

  for (i = 0; i < newArr.length; i++) {
    if (newArr[i].includes('-Ranged')) {
      temp = '';
      for (x = 0; x < newArr[i].indexOf('-'); x++) {
        temp += newArr[i][x];
      }
      rangedArr.push(temp);

    } else if (newArr[i].includes('-Melee')) { 
      temp = '';
      for (x = 0; x < newArr[i].indexOf('-'); x++) {
        temp += newArr[i][x];
      }
      meleeArr.push(temp);
    }
  }
  return [rangedArr, meleeArr]
}

function singleSplit(str, divider) {
	var temp = '';
	var result = []
	for (i = 0; i < str.length; i++) {
		if (str[i] !== divider) {
			temp += str[i];
		} else if (str[i] == divider) {
		result.push(temp);
		temp = '';
		}
	}
  result.push(temp);
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []