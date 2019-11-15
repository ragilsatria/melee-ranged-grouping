function meleeRangedGrouping (str) {
  var str = str.split(',')
  var ranged=[]
  var melee=[]
  var result=[]
  var tampung=[]
  for(let i=0; i < str.length; i++){
  	var split = str[i].split('-')
  	tampung.push(split)
  }
  for(let i=0; i<tampung.length;i++){
  	for(let j=0; j<tampung[i].length;j++){
  		if(tampung[i][1]==='Ranged'){
  			if(ranged.includes(tampung[i][0])){

  			}else{
  				ranged.push(tampung[i][0])
  			}
  		}else if(tampung[i][1]==='Melee'){
  			if(melee.includes(tampung[i][0])){

  			}else{
  				melee.push(tampung[i][0])
  			}
  		}
	}
}result.push(ranged,melee)
 return result

}
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []