function meleeRangedGrouping (str) {
  let tampungArr = [],
      tampung = '',
      output = {
        ranged : [],
        melee : []
      }

  for (let i=0; i<str.length; i++) {
    if(str[i] === '-' || str[i] === ',') {
      tampungArr.push(tampung)
      tampung = ''
    } else if (i === str.length-1) {
      tampung += str[i]
      tampungArr.push(tampung)
    }
    else {
      tampung += str[i]
    }
  }

  for (let i = 0; i < tampungArr.length-1; i+=2) {
    if (tampungArr[i+1] === 'Ranged') {
      output.ranged.push(tampungArr[i])
    } else if (tampungArr[i+1] === 'Melee') {
      output.melee.push(tampungArr[i])
    }
  }

  return str.length ? [output.ranged, output.melee] : [];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []