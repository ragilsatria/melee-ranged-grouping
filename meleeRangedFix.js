function meleeRangedGrouping (str) {
	var output = [];
	var arrMelee = [];
	var arrRanged = [];
    
    if (str.length === 0) {
        return output;
    }
    
    var splittedStr = str.split(',');
    
    var splitted = [];
    for (var i=0; i<splittedStr.length; i++) {
        splitted.push(splittedStr[i].split('-'));
    }

    for (var i = 0; i < splitted.length; i++) {
   		if (splitted[i][1]==='Ranged') {
  			arrRanged.push(splitted[i][0])
  		} else {
  			arrMelee.push(splitted[i][0])
  		}
    }
    output.push(arrRanged)
    output.push(arrMelee)
    return output
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []