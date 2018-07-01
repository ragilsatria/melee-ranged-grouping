// exercises 6 - (WEEK 5) //

// Melee Ranged Grouping //

function meleeRangedGrouping (str) {
    //your code here
    if(str.length === 0){
        var result = [];
        return result;
    }
    
    var hasil = [[], []];
    var arr = str.split(',');
    
    //console.log(arr.length)
    

    //console.log(arr)
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            if(arr[i][j] === '-' && arr[i][j+1] === 'R'){
               hasil[0].push(arr[i].substring(0, j))
            } else if(arr[i][j] === '-' && arr[i][j+1] === 'M'){
                hasil[1].push(arr[i].substring(0, j))
            }
        }
    }

    

    return hasil;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []