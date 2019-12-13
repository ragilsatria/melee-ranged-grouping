function meleeRangedGrouping (str) {
	var hasil = [];
	if(str.length == 0) {
		return hasil;
	}
	var hasil2 = [];
	var hasil3 = [];
	var arr = str.split(",");
	for(var i = 0; i < arr.length; i++) {
		var arr2 = arr[i].split('-');
		if(arr2[1] === "Ranged") {
			hasil2.push(arr2[0]);
		} else if(arr2[1] === "Melee") {
			hasil3.push(arr2[0]);
		}
	}
	hasil.push(hasil2);
	hasil.push(hasil3);
	return hasil;
	
}


console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []