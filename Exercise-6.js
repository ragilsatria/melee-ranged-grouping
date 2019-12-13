function meleeRangedGrouping (str) {
	//your code here	
	let arrResult = [[],[]];
	let arrStr = splitManual(str, ",");
	for(let i = 0; i < arrStr.length; i++){
		let arrHero  = splitManual(arrStr[i],"-");
		let namaHero = arrHero[0];
		let typeHero = arrHero[1];
		if(typeHero === "Ranged"){
			pushManual(arrResult[0],namaHero);	
		}else if(typeHero === "Melee"){
			pushManual(arrResult[1],namaHero);
		}
	}

	function splitManual(str, separator){
		let arrSplitted = [];
		let word = "";
		for(let i = 0; i < str.length; i++){
			if(str[i] === separator){
				pushManual(arrSplitted, word);
				word = "";
			}else{
				word += str[i]
			}
		}
		arrSplitted.push(word);
		return arrSplitted;
	}

	function pushManual(arr, word){
		return arr[arr.length] = word;
	}

	return arrResult[0].length > 1 ? arrResult : [];	
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
