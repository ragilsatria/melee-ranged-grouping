function meleeRangedGrouping(str) {
  if (str.length <= 0) {
    return [];
  }
  // buat variabel untuk menampung hasil akhir
  var newHero = [[], []];

  var hero = "";
  var type = "";

  // true = hero, false = type;
  var heroTypeSwitch = true;
  for (var i = 0; i <= str.length; i++) {
    if (str[i] == "-") {
      heroTypeSwitch = !heroTypeSwitch;
    } else if (str[i] == "," || str[i] == undefined) {
      heroTypeSwitch = !heroTypeSwitch;
      if (type == "Ranged") {
        newHero[0].push(hero);
      } else if (type == "Melee") {
        newHero[1].push(hero);
      }
      hero = "";
      type = "";
    } else {
      if (heroTypeSwitch == true) {
        hero += str[i];
      } else {
        type += str[i];
      }
    }
  }
  return newHero;
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
