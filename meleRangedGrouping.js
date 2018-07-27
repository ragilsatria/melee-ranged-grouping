function meleeRangedGrouping (str) {


  var ranged=[]
  var melee=[]
  var temp=[]
  var strSplit=str.split(",")
  for (var i = 0; i < strSplit.length; i++) {
    var kata=strSplit[i].split("-")
     // console.log(kata)
      if (kata[1]==="Ranged") {
        ranged.push(kata[0])
      } else if (kata[1]==="Melee") {
        melee.push(kata[0])
      }else{
        return '[]'
      }
  }
  temp.push(ranged,melee)
  return temp
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
