function meleeRangedGrouping (str) {
  let tampungArr = [],
      tampung = '',
      output = {
        ranged : [],
        melee : []
      };

  //  Split string argement in str parameter to collect hero's name and hero's type.
  for (let i = 0; i < str.length; i++) {
    //  If found '-' or ',' character then its time to push our hero's name or 
    //  hero's type to tampungArr array.
    if (str[i] === '-' || str[i] === ',') {
      tampungArr.push(tampung);
      tampung = '';
    }
    //  If its our last iterative then its also time to push hero's type to tampungArr array.
    else if (i === str.length - 1) {
      tampung += str[i];
      tampungArr.push(tampung);
    }
    //  We create our hero's name or hero's type here before we push it to tampungArr array.
    else {
      tampung += str[i];
    }
  }

  //  This loop is increament by 2 because our tampungArr array structure is hero's name then hero's type.
  for (let i = 0; i < tampungArr.length - 1; i += 2) {
    if (tampungArr[i + 1] === 'Ranged') {
      output.ranged.push(tampungArr[i]);
    } else if (tampungArr[i + 1] === 'Melee') {
      output.melee.push(tampungArr[i]);
    }
  }

  //  We only assume that the argument is always <hero's name>-<hero's type> or empty string.
  //  So we return [[hero with ranged type], [hero with melee type]] or empty array [].
  return str.length ? [output.ranged, output.melee] : [];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []