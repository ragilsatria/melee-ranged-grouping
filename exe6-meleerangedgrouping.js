function meleeRangedGrouping(str) {
  //your code here
  var result = [[], []]

  //conditioning if null entry
  if (str == false) {
    result = []
  }

  //making manual function for split
  function splitManual(string, splitter) {
    var newString = []
    var temp = ""
    for (let i = 0; i < string.length; i++) {
      if (string[i] != splitter) {
        temp += string[i]
      } else {
        newString.push(temp)
        temp = ""
      }
    }
    newString.push(temp)
    return newString
  }

  //splitting str by ","" & "-""
  var splittedStr = splitManual(str, ",")
  var splittedStr2 = []
  for (let i = 0; i < splittedStr.length; i++) {
    var temp2 = ""
    temp2 = splitManual(splittedStr[i], "-")
    splittedStr2.push(temp2)
  }

  //adding hero names to result array
  for (let i = 0; i < splittedStr2.length; i++) {
    if (splittedStr2[i][1] == "Ranged") {
      result[0].push(splittedStr2[i][0])
    } else if (splittedStr2[i][1] == "Melee") {
      result[1].push(splittedStr2[i][0])
    }
  }
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []