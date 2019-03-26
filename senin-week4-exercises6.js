/**
 * <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...
 * [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
 */

function meleeRangedGrouping (str) {
    //your code here
    if(str.length === 0){
        return []
    }
    var a = ''
    var arr = []
    for(i = 0; i < str.length; i++){
        var found = false
        if(str[i] !== ','){
            if(str[i] !== '-'){
                found = true
                a += str[i]
            }
        }
        if(found === false || i === str.length-1){
            arr.push(a)
            a = ''
        }
    }
    var arr2 = [[],[]]
    for(i=1; i<arr.length;i++){
        if(arr[i] === 'Ranged'){
            arr2[0].push(arr[i-1])
        }
        if(arr[i] === 'Melee'){
            arr2[1].push(arr[i-1])
        }
    }
    
    return arr2
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []