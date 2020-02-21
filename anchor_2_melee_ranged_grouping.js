function meleeRangedGrouping(str) {
  //your code here
  if (!str.length) {
    return [];
  }

  let result = [];
  let hero = '';
  for (let i = 0; i < str.length; i++) {
    hero += str[i];
    if (str[i + 1] === '-') {
      result.push(hero);
      hero = '';
    } else if (str[i] === '-') {
      hero = '';
    }

    if (str[i + 1] === ',') {
      result.push(hero);
      hero = '';
    } else if (str[i] === ',') {
      hero = '';
    }

    if (i === str.length - 1) {
      result.push(hero);
    }
  }

  let melee = [],
    ranged = [];
  for (let j = 0; j < result.length; j++) {
    if (result[j] === 'Melee') {
      melee.push(result[j - 1]);
    } else if (result[j] === 'Ranged') {
      ranged.push(result[j - 1]);
    }
  }

  let lastOutput = [];
  lastOutput.push(ranged, melee);

  return lastOutput;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
