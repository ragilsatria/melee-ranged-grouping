function meleeRangedGrouping (string) {
  //your code here
  // code below here
  if (string === '') {
      return []
  }
  var str = ''
  var newArr = []
  var arr = []
  for (let i=0; i<=string.length; i++) {                
      if (string[i] != ',' && i != string.length) {
          if (string[i] != '-' ) {
              str += string[i];
          } else {
              var arr = [str]
              str = ''
          }
      } else {
          arr.push(str)
          str = ''
          //console.log(arr)
          newArr.push(arr)
      }
  }
var a = []
var b = []
for (let i=0; i<newArr.length; i++) {
    if (newArr[i][1] === 'Ranged') {
        a.push(newArr[i][0])
    } else if (newArr[i][1] === 'Melee') {
        b.push(newArr[i][0])          
    }
}       
return [a,b]  
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []