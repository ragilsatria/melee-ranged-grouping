 // [Exercises 6] Melee Ranged Grouping
 // Logic Challenge: Melee Ranged Grouping

function meleeRangedGrouping (str) {
  //your code here
  var grouped = [];
  var listGroup = str.split(',');
  if (listGroup[0].length !== 0) {
	  for (var i = 0; i < listGroup.length; i++) {
	  	var listGroupE = listGroup[i].split('-');
	  	if (rangedGroup === undefined) {
	  		var rangedGroup = [];
	  	}
	  	if (meleeGroup === undefined) {
	  		var meleeGroup = [];
	  	}
	  	if (listGroupE[1] === 'Ranged'){
	  		rangedGroup.push(listGroupE[[0]]);
	  	} else {
	  		meleeGroup.push(listGroupE[[0]]);
	  	}
	  }
	  if (meleeGroup !== undefined) {
	  	grouped.push(rangedGroup, meleeGroup);
	  }
  }
  return grouped;

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []


// Diberikan function meleeRangedGrouping yang 
// menerima 1 parameter berupa string, 
// implementasikan meleeRangedGrouping agar dapat 
// menghasilkan multidimensional array seperti yang 
// diminta.

// Format string yang diberikan adalah: 
// <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: 
// [ 	
// 	[ <daftar_hero_dengan_tipe_ranged> ], 
// 	[ <daftar_hero_dengan_tipe_melee> ] 
// ]

// Jika input adalah string kosong ('') maka return 
// array kosong

