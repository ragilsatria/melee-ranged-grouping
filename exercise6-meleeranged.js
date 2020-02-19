function meleeRangedGrouping (str) {
	var pemisah = []
	var koma = [0]
	for (var i = 0; i < str.length; i++) {
		if(str[i]=='-') pemisah.push(i)
	}
	for (var i = 0; i < str.length; i++) {
		if(str[i]==',') koma.push(i)
	}
	var obj = {}
	for (var i = 0; i < str.length; i++) {
		for(var j = 0; j < pemisah.length; j++) {
			if(str[i]==','){
				var index1 = koma[j]
				if(j!=0) index1 = koma[j]+1
				var index2 = pemisah[j]
				obj[str.slice(index1,index2)] = str.slice(index2+1,koma[j+1])
			}
		}
	}
	var ranged = []
	var melee = []
	var result = []
	for(person in obj){
		if(obj[person]=='Ranged') ranged.push(person)
		if(obj[person]=='Melee') melee.push(person)
		result = [ranged,melee]
	}
	return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []