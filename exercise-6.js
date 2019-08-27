function meleeRangedGrouping(str) {
    var temp = []
    var string = ''
    for (var i = 0; i <= str.length; i++) {

        if (str[i] === ',' || i === str.length) {
          temp.push(string)
          string = ''
        } else {
          string += str[i]
          }
          // console.log(temp);
    }

    var temps = []
    var strings = ''
    for (var j=0; j<temp.length; j++) {
      var arr = []
      for (var k=0; k<=temp[j].length; k++) {
        if (temp[j][k] === '-' || k === temp[j].length) {
          arr.push(strings)
          strings = ''
        } else {
          strings+=temp[j][k]
        }
      }
      temps.push(arr)
    }
    // console.log(temps);

    var obj = {}
    for (var l=0; l<temps.length; l++) {
      if (obj[temps[l][1]] === undefined) {
          obj[temps[l][1]] = []
          obj[temps[l][1]].push(temps[l][0])
      } else {
        obj[temps[l][1]].push(temps[l][0])
      }

    } 
    // console.log(obj);
    
    var objValue = Object.values(obj)
    return objValue
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  // console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  // console.log(meleeRangedGrouping('')); // []