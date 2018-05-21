function meleeRangedGrouping(str) {
  // init arr to contain array of classifed heroes
  var classifiedHeroes = [
    [],
    []
  ];

  // logic to detect if there is a content in str array
  if (str.length === 0) {
    return [];
  } else {
    // console.log(str.length);

    // init var
    var arrOfObjHeroes = []; // arr to contain obj of every unique heroes
    var heroCount = 1; // var to cotain array index of hero object


    for (var i = 0; i < str.length; i++) {

      // init var to contain string value
      var inspectorNumberofHeroes = str[i];

      // logic to detect number of heroes
      if (inspectorNumberofHeroes === ",") {

        // for every unique hero detected, push new obj into arrOfObjHero
        arrOfObjHeroes.push(heroCount = {
          heroName: "",
          heroType: ""
        })
        heroCount++; // change hero count value
      } else if (i === (str.length - 1)) {
        arrOfObjHeroes.push(heroCount = {
          heroName: "",
          heroType: ""
        })
        heroCount++;
      }
    }

    // console.log(arrOfObjHeroes);

    // init var
    var arrOfObjHeroesAccess = 0; // var to contain arrOfObjHero index
    var propertyAccess = "heroName"; // var to contain property of object which corresponds to arrOfObjHeroes index

    // loop to assign heroName and heroType to each unique obj inside arrOfObjHero
    for (var j = 0; j < str.length; j++) {
      var inspectorHeroInfo = str[j];

      // logic to differentiate b/w hero name and hero type
      if (inspectorHeroInfo !== '-' && inspectorHeroInfo !== ',') {
        arrOfObjHeroes[arrOfObjHeroesAccess][propertyAccess] += inspectorHeroInfo;
      } else if (inspectorHeroInfo === "-") {
        propertyAccess = "heroType";
      } else if (inspectorHeroInfo === ",") {
        arrOfObjHeroesAccess++;
        propertyAccess = "heroName"
      }
    }
    // console.log(arrOfObjHeroes);

    // loop to assign hero into classifiedHeroes based on hero type
    for (var k = 0; k < arrOfObjHeroes.length; k++) {
      // console.log(arrOfObjHeroes[k]);

      // logic to detect heroType
      if (arrOfObjHeroes[k].heroType === "Ranged") {
        classifiedHeroes[0].push(arrOfObjHeroes[k].heroName)
      } else if (arrOfObjHeroes[k].heroType === "Melee") {
        classifiedHeroes[1].push(arrOfObjHeroes[k].heroName)
      }
    }
    return classifiedHeroes;
  }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
//
console.log(meleeRangedGrouping('')); // []
