function meleeRangedGrouping (str) {
    var result = [];
    var temp = [];
    var temp1 = '';
   
   if (str.length === 0) return result
   
    for ( var x = 0; x < str.length; x++ ){
        if ( str[x] === ',' ){
          temp.push(temp1)
          temp1 = '';
      }else if ( x === str.length-1 ){
        temp1 += str[x]
        temp.push(temp1)
      }else{
        temp1 += str[x]
      }
    }
  
  
    var a = temp
    var name = [];
    var temp2 = [];
    var arr = '';
  
  for ( var x = 0; x < a.length; x++ ){
      // console.log(a[x])
      for ( var y = 0; y < a[x].length; y++ ){
        // console.log(a[x][y])
        if ( a[x][y] === '-'){
          name.push(arr)
          arr = '';
        }else if( y === a[x].length-1){
          arr += a[x][y]
          name.push(arr)
          arr = ''; 
        }else{
          arr += a[x][y]
        }
      }
      temp2.push(name)
      name = [];
    }
  
  
    var b = temp2
    var ranged = [];
    var melee = [];
  
    for ( var x = 0; x < b.length; x++ ){
      // console.log(b[x])
      if ( b[x][1] === 'Ranged' ){
          ranged.push(b[x][0])
      }else if ( b[x][1] === 'Melee' ){
         melee.push(b[x][0])
      }
    }
    result.push(ranged)
    result.push(melee)
    // console.log(ranged)
    // console.log(melee)
    return result
  }
 

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
