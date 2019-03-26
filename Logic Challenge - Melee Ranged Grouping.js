function meleeRangedGrouping (str) {
    //your code here
    if(str === "") return []
    var list = str.split(",")
    var baru = []
    var tipe = {
        "Ranged": 0,
        "Melee": 1
    }
    for(x in tipe) {
        baru[tipe[x]] = []
    }
    for(var i = 0; i < list.length; i++) {
        list[i] = list[i].split("-")
        // if(baru[tipe[list[i][1]]] === undefined) baru[tipe[list[i][1]]] = []
        baru[tipe[list[i][1]]].push(list[i][0])
    }
    return baru
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []