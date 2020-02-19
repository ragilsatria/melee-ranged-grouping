function meleeRangedGrouping (str) {
    if (str.length == 0) {
        var hasil = []
        return hasil
    }
    else {
        var hasil = [
            [],[]
        ]
        var arrTemp = []
        var strTemp = ''

        for (var i = 0; i < str.length; i++) {
            if (str[i] === '-' || str[i] === ',') {
                arrTemp.push(strTemp)
                strTemp = ''
            }
            else if (i == str.length-1) {
                strTemp += str[i]
                arrTemp.push(strTemp)
            }
            else {
                strTemp += str[i]
            }
        }
        
        for (var j = 0; j < arrTemp.length; j++) {
            if (arrTemp[j] === 'Ranged') {
                hasil[0].push(arrTemp[j-1])
            }
            else if (arrTemp[j] === 'Melee') {
                hasil[1].push(arrTemp[j-1])
            }
        }

        return hasil
    }
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []