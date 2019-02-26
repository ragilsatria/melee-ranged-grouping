function meleeRangedGrouping (str) {
    //your code here
    var arr=str.split(",")
    var ranged=[]
    var melee=[]

    for (var j=0;j<arr.length;j++) {
        if (arr[j][(arr[j].length)-1]==='d'){
            ranged.push(arr[j].slice(0,-7))
        }
        else if (arr[j][(arr[j].length)-1]==='e'){
            melee.push(arr[j].slice(0,-6))
        }
    }
    return [ranged,melee]
  }

  // TEST CASE

  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

  console.log(meleeRangedGrouping('')); // []