function meleeRangedGrouping (str) {
    //your code here

    if(str === "") {
        return []
    }

    var output = ""
    for(var i = 0; i <= str.length-1; i++) {
        if(str[i] === "-") {
            output += ","
        }
        else{
        output += str[i]
        }
    }
    
    var outputSplit = output.split(",")

    // console.log(outputSplit)
    
    var arr = []
    for(var i = 0; i <= outputSplit.length-1; i+=2) {
        arr.push([outputSplit[i], outputSplit[i+1]])
    }

    // console.log(arr)
    var ranged = []
    var melee = []
    var arr2= []
    for(var i = 0; i<= arr.length-1; i++) {
        if(arr[i][1] === "Ranged") {
        ranged.push(arr[i][0])
        }
        else{
        melee.push(arr[i][0])
        }
    }
    arr2.push(ranged,melee)
    return arr2
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
//   console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
//   console.log(meleeRangedGrouping('')); // []
