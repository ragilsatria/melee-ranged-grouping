function splitted(str, separator) {
  var hasil = []
  var tampung = ''
  for (var i = 0; i < str.length; i++) {
    if (str[i] == separator) {
      hasil.push(tampung)
      tampung = ''
    } else {
      tampung += str[i]
    }
  }
  hasil.push(tampung)
  return hasil
}

function meleeRangedGrouping(str) {
  //your code here
  var splitKoma = splitted(str, ',')

  var hasilSplit = []
  for (var i = 0; i < splitKoma.length; i++) {
    hasilSplit.push(splitted(splitKoma[i], '-'))
  }

  if (str.length == 0) {
    return []
  }
  
  var arr = [[], []]
  for (var j = 0; j < hasilSplit.length; j++) {
    if (hasilSplit[j][1] == 'Ranged') {
      arr[0].push(hasilSplit[j][0])
    } else {
      arr[1].push(hasilSplit[j][0])
    }
  }
  return arr
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []