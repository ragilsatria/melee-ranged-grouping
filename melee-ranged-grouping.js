/*Logic Challenge: Melee Ranged Grouping

Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong

Submit Tugas Disini*/

function meleeRangedGrouping (str) {
  var hasil =[];
  var ranged =[];
  var melee =[];
  var awalKata = 0;
  if(str.length === 0){
      return []
  }
  for(var i = 0;i < str.length;i++){      
    
    if(str[i] === ','){
        awalKata = i+1;
        }
    if(str[i] === '-' && str[i+1] === 'R'){
        var coba = str.substring(awalKata,i);        
        ranged.push(coba);
    }else if(str[i] === '-' && str[i+1] === 'M'){
        var coba = str.substring(awalKata,i);
        melee.push(coba);
    }    
  }
  hasil.push(ranged);
  hasil.push(melee)
return hasil
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []