function meleeRangedGrouping (str) {
    
    var totArr = []
    var melee = []
    var ranged = []

    //var splitStr = str.split(',');
    var splitStr = str.split('-')
    //console.log(splitStr)
    var newStr = splitStr.join()
    //console.log(newStr)
    var newSplitStr = newStr.split(',')
    //console.log(newSplitStr)
    

    

    for ( var i = 0 ; i <newSplitStr.length ; i++) {
       
        if ( newSplitStr[i] === 'Ranged') {

            ranged.push(newSplitStr [i -1])
        }

        else if ( newSplitStr[i] === 'Melee') {

            melee.push(newSplitStr[i -1])
        }
                
    }
    totArr.push(ranged, melee);
    return totArr
    // //your code here
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  //console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  //console.log(meleeRangedGrouping('')); // []