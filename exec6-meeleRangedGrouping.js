function meleeRangedGrouping(str) {
  if (str.length === 0) return [];
  let group = [[], []];
  let hero = "";
  let start = true;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === ",") {
      hero = "";
      start = true;
      continue;
    }
    if (start) {
      if (char === "-" && str[i + 1] === "R") {
        group[0].push(hero);
        start = false;
      } else if (char === "-" && str[i + 1] === "M") {
        group[1].push(hero);
        start = false;
      } else {
        hero += char;
      }
    }
  }
  return group;
}

// TEST CASE

console.log(meleeRangedGrouping("Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged"));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
