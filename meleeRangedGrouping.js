/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
 var hasil = [[],[]];
 var strSplit = str.split(',');
 //console.log(strSplit);
for(let i = 0; i < strSplit.length; i++){
  let stripSplit = strSplit[i].split('-')
  //console.log(stripSplit);
  if(stripSplit[1] === 'Ranged'){
    hasil[0].push(stripSplit[0]) 
  }else{
    hasil[1].push(stripSplit[0])
  }
}
if(str.length === 0){
return [];
}else{
  return hasil;
}
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []


