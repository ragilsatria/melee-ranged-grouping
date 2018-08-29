/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string,
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...
Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    //your code here
    if(str === ''){
        return '[]'
    }

    var result = []
    var pisah = str.split(',')
    var meleerangedArr = []
    
    //console.log(pisah)
    for (var i = 0; i < pisah.length; i++){
        meleerangedArr.push(pisah[i].split('-'))
        //console.log(meleerangedArr[i])
    }
    var heroRanged = []
    var heroMelee = []
    for (var j = 0; j < meleerangedArr.length; j++){
        if(meleerangedArr[j][1] === 'Ranged'){
            heroRanged.push(meleerangedArr[j][0])
        } else if(meleerangedArr[j][1] === 'Melee'){
            heroMelee.push(meleerangedArr[j][0])
        }
        
    }
    result.push(heroRanged, heroMelee)
    // console.log(heroRanged)
    // console.log(heroMelee)
    
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []