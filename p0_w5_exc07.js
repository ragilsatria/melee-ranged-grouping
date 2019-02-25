//Gerin Prapaska
//HACKTIV8 Batch 29, Classic Fox
//Phase 0, Week 5
//Exercises 7: 
//---------------------------------------

function meleeRangedGrouping (str) {
  //your code here
  var arr = []
  var ranged = []
  var melee = []

  if (str.length > 0){

    arr = str.split(',')
    // console.log(arr)

    for (var i = 0 ; i < arr.length ; i ++){
      var temp = arr[i].split('-') 
      arr[i] = temp
    }
    // console.log(arr)

    for (var i = 0 ; i < arr.length ; i ++){
      if (arr[i][1]==='Ranged'){
        ranged.push(arr[i][0])
      } else if (arr[i][1]==='Melee'){
        melee.push(arr[i][0])
      }
    }
    arr = [ranged, melee]
    // console.log(arr)
  }

    return arr
} 

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []