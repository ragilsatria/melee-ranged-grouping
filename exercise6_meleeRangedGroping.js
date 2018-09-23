function meleeRangedGrouping (str) {
  if (str.length == 0){
    return []
  }
  else{
    output = [[],[]]
    var a = str.split(",")
    for (var i = 0; i < a.length; i++){
        var b = a[i].split("-")
        if (b[1] == "Ranged"){
          output[0].push(b[0])
        }
        else{
          output[1].push(b[0])
        }
    }
    return output    
  }
}

// TEST CASE
//-Ranged = 7
//-Melee = 6
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
