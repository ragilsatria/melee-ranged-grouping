/*Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong

Submit Tugas Disini*/

function meleeRangedGrouping (str) {
  if(str.length === 0){
		return [];
	}
  var pair = str.split(",");
  var hero = []
  var result = [[],[]]
  for(var i = 0; i < pair.length; i++){
    hero.push(pair[i].split("-"))
    if(hero[i][1] === "Ranged"){
      result[0].push(hero[i][0])
    } else {
      result[1].push(hero[i][0])
    }
  }
  return result
}

/* --- CARA LAIN --- 
function meleeRangedGrouping (str) {
	if(str.length === 0){
		return [];
	}
  var pair = str.split(",");
  var hero = []
  var obj = {}
  for(var i = 0; i < pair.length; i++){
    hero.push(pair[i].split("-"));
    if(obj[hero[i][1]] === undefined){
      obj[hero[i][1]] = [];
      obj[hero[i][1]].push(hero[i][0])
    }else{
      obj[hero[i][1]].push(hero[i][0])
    }
  }
  return Object.values(obj)
}
*/

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []