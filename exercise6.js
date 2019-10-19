/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, 
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array 
seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,
<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], 
[ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    //your code here
    var arr = str.split(',');
    var tempRanged = [];
    var tempMelee = [];
    var final = [];
    if(arr.length < 2){
        return []
    }
    for(i = 0 ; i < arr.length ; i++){
        var temp = arr[i].split('-');
        if(temp[1] == 'Ranged'){
            tempRanged.push(temp[0]);
        } else if(temp[1] == 'Melee'){
            tempMelee.push(temp[0]);
        }
    }
    final.push(tempRanged, tempMelee)
    return final
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []