function meleeRangedGrouping(str) {
	var result = [];

	if (str.length === 0) return [];

	var newArr = str.split(',');

	secondArr = [];
	for (var i = 0; i < newArr.length; i++) {
		secondArr.push(newArr[i].split('-'));
	}

	var ranged = [];
	var melee = [];
	for (var j = 0; j < secondArr.length; j++) {
		if (secondArr[j][1] === 'Ranged') {
			ranged.push(secondArr[j][0]);
		} else if (secondArr[j][1] === 'Melee') {
			melee.push(secondArr[j][0]);
		}
	}
	result.push(ranged, melee);
	return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
