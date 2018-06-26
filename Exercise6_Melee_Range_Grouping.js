//Exercise 6 Melee Range Grouping

function meleeRangedGrouping (str) {
	var output = [];

	if(str){
		output = [[],[]];
		str = str.split(",");
		for(var character of str){
			var character_type = character.split("-");
			output[(character_type[1]==="Ranged" ? 0 : 1)].push(character_type[0]);
		}
	}

	return output;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []