function meleeRangedGrouping (str) {
    var groupRanged = [];
    var groupMelee = [];
    var group = [];
    var strsplit = str.split(',');
    arTemp = [strsplit]
    for( i=0 ; i<arTemp.length ; i++){
        for( j=0 ; j<arTemp[i].length ; j++){
          arrStr = arTemp[i][j].split('-')
          // console.log(arrStr)
          if( arrStr[1] === 'Ranged' ){
           groupRanged.push(arrStr[0])
            }else if( arrStr[1] === 'Melee' ){
              groupMelee.push(arrStr[0])
            }
        } 
    
        group = [groupRanged,groupMelee];
        // console.log(arrStr[0])
        // console.log(arTemp)
    }
  if(str.length === 0) {
    return []
  } else {
    return group
  }
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []