/**
 * Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
 */


function meleeRangedGrouping (str) {
    //your code here
    var result = []
    var buffer = ""
    if (str){
        for (i=0; i<str.length; i++){
            if (str[i] === "-" && buffer !== "" || str[i] === ","){
                result.push(buffer)
                buffer = ""
            } else if (str[i] !== "-"){
                buffer += str[i]
            }
        }
        result.push(buffer)
    }
    //return result
    var temp = []
    
    for (i=0; i<result.length; i+=2){
        temp.push([result[i], result[i+1]])
    }
    //return temp

    var ranged = []
    var melee = []
    var finalRes = [ranged,melee]

    if (str.length !== 0){
        for (i=0; i<temp.length; i++){
            if (temp[i][1] === "Ranged"){
                ranged.push(temp[i][0])
            } else if (temp[i][1] === "Melee"){
                melee.push(temp[i][0])
            }
        }
    } else {
        return []
    }
    
    return finalRes

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []