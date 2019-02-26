/**
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.
Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...
Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
Jika input adalah string kosong ('') maka return array kosong.
 */

function meleeRangedGrouping (str) {
    if(str === ''){
      return []
    }
  
   var strTamp = ''
   var arrStr = []
   var index = 0
  
   for(var i = 0; i < str.length ;i++){
     
    if(str[i] === '-' ){
      arrStr.push([strTamp])
      strTamp = ''
     
    } else if (str[i] === ','){
      arrStr[index].push(strTamp)
      strTamp = ''
      index++
    }
    else {
      strTamp += str[i]
    }
  }
  arrStr[index].push(strTamp)
  // console.log(arrStr)
  
  var same = arrStr[0][1]
  var ranged = []
  var mele = []
  for(var j = 0; j < arrStr.length ;j++){
     if(arrStr[j][1] === same){
      ranged.push(arrStr[j][0])
     }  else {
      mele.push(arrStr[j][0])
     }
  }
  
  return [ranged,mele]
  }
  
  // TEST CASE
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []