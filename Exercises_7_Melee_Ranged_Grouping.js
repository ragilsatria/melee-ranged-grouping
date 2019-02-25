/* 
Diberikan function meleeRangedGrouping yang 
menerima 1 parameter berupa string, 
implementasikan meleeRangedGrouping agar dapat menghasilkan 
multidimensional array seperti yang diminta.

Format string yang diberikan adalah: 
<nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: 
[ [ <daftar_hero_dengan_tipe_ranged> ], 
[ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') 
maka return array kosong */

function meleeRangedGrouping (str) {
    //your code here
    //console.log(str)
    var newStr = str.split(",")
    var newArray = []
    var grupRanged = []
    var grubMelee = []
    var grub = []
    //console.log(newStr)
    if (str === ""){
        return grub
    }

    for (var i = 0 ; i < newStr.length ; i++){
         //console.log(newStr[i].split("-"))
         newArray.push(newStr[i].split("-"))
        if (newArray[i][1] === "Ranged"){
            grupRanged.push(newArray[i][0])
        }else
        if (newArray[i][1] === "Melee") {
            grubMelee.push(newArray[i][0])
        }
        //console.log(newArray)    
    }
    //console.log(newArray)
    grub.push(grupRanged)
    grub.push(grubMelee)

    return grub
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []