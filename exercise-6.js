function mySplit(str, symbol, symbol2) {
	// split str every ','
	let arrayPerson = [];
	let arrayType = [];
	let temp = '';
	let result = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === symbol) {
			arrayPerson.push(temp);
			i++;
			temp = '';
		}
		else if (str[i] === symbol2 || str[i] == str[str.length - 1]) {
			arrayType.push(temp);
			i++;
			temp = '';
		}
		temp += str[i];
	}

	result.push(arrayPerson);
	result.push(arrayType);

	return result;
}

function meleeRangedGrouping(str) {
	if (str.length === 0) {
		return [];
	}
	let array = mySplit(str, '-', ',');
	let unique = [
		'Range',
		'Melee'
	];

	let result = [
		[],
		[]
	];

	for (let i = 0; i < unique.length; i++) {
		let temp = [];
		for (let j = 0; j < array[1].length; j++) {
			if (unique[i] === array[1][j]) {
				temp.push(array[0][j]);
			}
		}
		result[i] = temp;
	}
	return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
