// exercises 6 - (WEEK 5) //

// Melee Ranged Grouping //

function meleeRangedGrouping (str) {
    var hasil = [];
    
    //your code here
    var arr = str.split(',');
    // [ 'Razor-Ranged',
    //   'Invoker-Ranged',
    //   'Meepo-Melee',
    //   'Axe-Melee',
    //   'Sniper-Ranged' ]

    var arr1 = []

    for (var i = 0; i < arr.length; i++) {
        arr1.push(arr[i].split("-"))
    }
    // [ [ 'Razor', 'Ranged' ],
    // [ 'Invoker', 'Ranged' ],
    // [ 'Meepo', 'Melee' ],
    // [ 'Axe', 'Melee' ],
    // [ 'Sniper', 'Ranged' ] ]

    var kelas = []
    kelas.push(arr1[0][1])
    
    for (var i = 1; i < arr1.length; i++) {
        var trigger = true
        for (var j = 0; j < kelas.length; j++) {
            if (kelas[j] === arr1[i][1]) {
                trigger = false
            }
        }
        if (trigger) {
            kelas.push(arr1[i][1])
        }
    }
    // [ 'Ranged', 'Melee' ]

    for (var i = 0; i < kelas.length; i++ ) {
        hasil.push([])
        for (var j = 0; j < arr1.length; j++) {
            if (arr1[j][1] === kelas[i]) {
                hasil[hasil.length-1].push(arr1[j][0])
            }
        }
    }
    // [ [ 'Razor', 'Invoker', 'Sniper' ], [ 'Meepo', 'Axe' ] ]
    return hasil;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged,Asrul-Kaki,Andri-Kaki'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
//   console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
//   console.log(meleeRangedGrouping('')); // []