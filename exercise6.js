function meleeRangedGrouping (str) {
    //your code here
    var hasil = []
    var splitStr = str.split(',')

    if(str.length===0){
        return hasil
    }

    var arrSplit = []
    for(var i=0; i<splitStr.length; i++){
        arrSplit.push(splitStr[i].split('-'))
    }

    var obj = {
        Melee: [],
        Ranged: []
    }

    for(var j=0; j<arrSplit.length; j++){
        if(arrSplit[j][1]==='Melee'){
            obj['Melee'].push(arrSplit[j][0])
        }else if(arrSplit[j][1]==='Ranged'){
            obj['Ranged'].push(arrSplit[j][0])
        }
    }
    hasil.push(obj['Ranged'], obj['Melee'])

    return hasil
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []