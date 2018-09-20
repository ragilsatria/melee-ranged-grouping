/*Logic Challenge: Melee Ranged Grouping
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string,
 implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array 
 seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong

Submit Tugas Disini
*/

function meleeRangedGrouping (str) {
  var results=[];
  if (!str.length) {
    return results;
  }
  results.push([], []);
  
var split=str.replace(/,/g,'^')
 split=split.replace(/-/g,'^');
 split=split.split('^')

  for (i=0; i<split.length-1; i+=1) {
    
    if (split[i+1]==='Ranged') {
      results[0].push(split[i]);
    }
    if (split[i+1]==='Melee'){
    results[1].push(split[i]);
  
    }
  }
  return results
}

// TEST CASE	
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));	
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]	
 console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));	
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]	
 console.log(meleeRangedGrouping('')); // []