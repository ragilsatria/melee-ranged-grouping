function meleeRangedGrouping (str) {
  //your code here

  var result = []

  if(str.length ==0){
        return result
  }
  var input = str.split(',')
  var inputSplit =[]
  var ranged= []
  var melee=[]


  for(var i =0; i<input.length; i++){
        inputSplit.push(input[i].split("-"))
    }

  for(var j=0; j<inputSplit.length; j++){
      if(inputSplit[j][1] == 'Ranged'){
          ranged.push(inputSplit[j][0])
      }else if(inputSplit[j][1] == 'Melee'){
        ranged.push(inputSplit[j][0])
    }
      
  }
  result.push(ranged, melee)
  return result 
  
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []