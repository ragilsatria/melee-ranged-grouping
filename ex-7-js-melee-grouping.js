function meleeRangedGrouping (str) {
    if(str === "") {
        return [];
    }
    
    var arr1 = str.split(",");
    var arr2 = [];
    var output = [[],[]];
    

    for(var i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i].split("-"));
    }

    for(var i = 0; i < arr2.length; i++) {
        if(arr2[i][1] === "Ranged") {
            output[0].push(arr2[i][0]);
        } else if(arr2[i][1] === "Melee") {
            output[1].push(arr2[i][0]);
        }

    }

    return output;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []