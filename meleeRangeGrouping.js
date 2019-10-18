//Week-5 Exercise Melee Range Grouping
/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string,
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...
Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

  function meleeRangedGrouping (str) {
    //your code here
    var temp = str.split(',');
    var result = [[],[]];
    for(var i=0; i<temp.length; i++) {
      temp[i]=temp[i].split('-');
      if(temp[i][1]==='Ranged') {
        if(result[0]===undefined) {
          result[0]=[temp[i][0]];
        }
        else {
          result[0].push(temp[i][0]);
        }
      }
      else if(temp[i][1]==='Melee') {
        if(result[1]===undefined) {
          result[1]=[temp[i][0]];
        }
        else {
          result[1].push(temp[i][0]);
        }
      }
    }
    if(str.length===0) {
      return [];
    }
    else {return result;}
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []