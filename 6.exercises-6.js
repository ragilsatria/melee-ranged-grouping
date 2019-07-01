
function meleeRangedGrouping (str) {
    //your code here
    var arrayOfSplit = str.split(',');
    var resultArray = [];
    var newObj = {
        'Ranged': [],
        'Melee': []
    }
    if(str.length == 0){
        return resultArray
    }
    for(var i = 0; i < arrayOfSplit.length; i++){
        var secondArrayOfSplit = arrayOfSplit[i].split('-')
        newObj[secondArrayOfSplit[1]].push(secondArrayOfSplit[0])
    }
    for(var key in newObj){
        resultArray.push(newObj[key])
    }
    return resultArray
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []