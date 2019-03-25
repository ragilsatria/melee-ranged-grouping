function meleeRangedGrouping (str) {
    //your code here
    var heroesWithSameRangeAttack = []
    if (str.length === 0) {
        return heroesWithSameRangeAttack
    }else{
        var strSplit = str.split(',')
        var temp = []
        
        for (var i = 0; i < strSplit.length; i++) {
            temp.push(strSplit[i].split('-'))
        }
        var obj = {}
        for (var j = 0; j < temp.length; j++) {
            if (obj[temp[j][1]] === undefined) {
                obj[temp[j][1]] = []
               
            }
            obj[temp[j][1]].push(temp[j][0])
        }
        var hasil = Object.entries(obj)
        for (var m = 0; m < hasil.length; m++) {
            heroesWithSameRangeAttack.push(hasil[m][1])
        }

        if (heroesWithSameRangeAttack.length < 2) {
            heroesWithSameRangeAttack.push([])
        }
        // result.push(heroesWithSameRangeAttack)
    }
    return heroesWithSameRangeAttack
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []