function meleeRangedGrouping (str) {
  var result = []
  var newStr = ''
  var string = str.split(",");

  if(str.length === 0) {
    return [];
  }
  
  for(var i = 0; i < string.length; i++) {
  	newStr = string[i].split("-")
  	result.push(newStr);
  }
  
  var resultAll = [[],[]]
  for(var j = 0; j < result.length; j++) {	
  	for(var k = 0; k < result[j].length; k++) {
  		var resultGroupRanged = ""
  		if (result[j][k] === "Ranged") {
  			resultGroupRanged += (result[j][0])
  			resultAll[0].push(resultGroupRanged)
  		}

  		var resultGroupMelee = ""
  		if(result[j][k] === "Melee") {
  			resultGroupMelee += (result[j][0])
  			resultAll[1].push(resultGroupMelee)
  		}
  	}
  }
  return resultAll;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []