function meleeRangedGrouping (str) {
  if (!str) return [];

  let splitedHero = str.split(",");
  let res = [];
  let rangedHero = [];
  let meleeHero = [];


  for (let i = 0; i < splitedHero.length; i++) {
    let splitedAbility = splitedHero[i].split("-");
    if (splitedAbility[1]=== "Ranged") {
      rangedHero.push(splitedAbility[0]);
    }
    else{
      meleeHero.push(splitedAbility[0]);
    }
  }
  res.push(rangedHero);
  res.push(meleeHero);
  return res;
}


// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
