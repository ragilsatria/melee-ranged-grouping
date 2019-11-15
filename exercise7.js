function meleeRangedGrouping (str) {
    //your code here
    var arrRanged = []
    var arrMelee = []
    var arrAll = []
    var split = str.split(",")
    var temp = ''
    for (var i = 0; i < split.length; i++) {
      for (var j = 0; j < split[i].length; j++) {
        if (split[i][j] === "-" && split[i][j+1] === "R") {
          arrRanged.push(split[i])
        } else if (split[i][j] === "-" && split[i][j+1] === "M") {
          arrMelee.push(split[i])
        }
      }
    }
    arrAll.push(arrRanged, arrMelee)
    var newArr = [[],[]]
    var newtemp = ''
    for (var x = 0; x < arrAll.length; x++) {
      for (var y = 0; y < arrAll[x].length; y++) {
        newtemp = arrAll[x][y].split("-")
        if (newtemp[1] === 'Ranged') {
          newArr[0].push(newtemp[0])
        } else if (newtemp[1] === 'Melee') {
          newArr[1].push(newtemp[0])
        }
      }
    }
    if (str.length === 0) {
      return '[]'
    } else {
      return newArr
    }
}  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []