
function meleeRangedGrouping (str) {
  
	if(!str.length){
	  return ""
	} 
	
	else {

		var removeComa = str.split(",");
		// console.log(removeComa)
		var temp = [];
		var result = [[], []];
		for(var i = 0; i < removeComa.length; i++){
			// console.log(removeComa[i].split("-"))
			temp.push(removeComa[i].split("-"));
		}
		// console.log(temp)
		for(var j = 0; j < temp.length; j++){
			// console.log(temp[j])
			if(temp[j][1] === "Ranged"){
				result[0].push(temp[j][0])
			} else if (temp[j][1] === "Melee"){
				result[1].push(temp[j][0])
			}
		}
		return result
	}

  }
   // TEST CASE
   console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
   console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
   console.log(meleeRangedGrouping('')); // [] 