function meleeRangedGrouping (str) {

  var arrKalimat = str.split(',')
  var arrKata = []
  var hasil = [[],[]]

  if(str === ''){

    return [];

  }

  for(var a = 0; a < arrKalimat.length; a++){

    var temp = arrKalimat[a].split('-')
    arrKata.push(temp)

  }

    
  for(var b = 0; b < arrKata.length; b++){

    if(arrKata[b][1] === 'Ranged'){

      hasil[0].push(arrKata[b][0])

    } else if(arrKata[b][1] === 'Melee'){

      hasil[1].push(arrKata[b][1])
      
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