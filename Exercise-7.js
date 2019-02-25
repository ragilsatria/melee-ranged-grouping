function meleeRangedGrouping(str) {
	//your code here
	var arr = str.split(',')
	var melee = []
	var ranged = []
	var result = []
	if(str === '') {
		return []
	}
	for(var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].split('-')
	}
	for(i = 0; i < arr.length; i++) {
		if(arr[i][1] === 'Melee') {
			melee.push(arr[i][0])
		} else if(arr[i][1] === 'Ranged') {
			ranged.push(arr[i][0])
		}
	}
	result = [ranged, melee]
	return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []