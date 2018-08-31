function split(str, char = '') {
  var result = [];
  var temp = '';
  for (var i = 0; i < str.length; i++) {
      if (char === '') {
          result.push(str[i])
      } else if (char !== str[i]) {
          temp = temp + str[i]
      } else {
          result.push(temp);
          temp = '';
      }
  }
  result.push(temp);
  return result;
}

function meleeRangedGrouping(str) {  
  var result = [];
  var splitWord = split(str, ",")

  var tipe = ['Ranged', 'Melee'];
  if (str.length === 0) {
      return [];
  } else {
      for (var z = 0; z < tipe.length; z++) {
          result.push([]);
      }
      for (var i = 0; i < splitWord.length; i++) {
          
          var count = 0;
          for (var j = 0; j < splitWord[i].length; j++) {
              var char = splitWord[i][j]
              if (char === "-") {
                  count = j
                  break;
              }
          }
         
          var types = splitWord[i].substring(count + 1);
         
          for (var k = 0; k < tipe.length; k++) {
              if (types === tipe[k]) {
                  var name = splitWord[i].substring(0, count);
                  result[k].push(name)
              }
          }
      }
  }

  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []