function split(str, operator) {
    var a = [];
    var b = "";
    for (var i = 0; i < str.length; i++) {
      if (str[i] === operator) {
        a.push(b);
        b = "";
      } else {
        b += str[i];
      }
    }
    a.push(b);
    return a;
  }
  function meleeRangedGrouping(str) {
    if (!str.length) {
      return [];
    }
    var output = [];
    var splitKoma = split(str, ",");
    for (var i = 0; i < splitKoma.length; i++) {
      var splitStip = split(splitKoma[i], "-");
      output.push(splitStip);
    }
    var hasilAkhir = {
      ranged: [],
      melee: []
    };
    for (var i = 0; i < output.length; i++) {
      if (output[i][1] === "Ranged") {
        hasilAkhir.ranged.push(output[i][0]);
      } else if (output[i][1] === "Melee") {
        hasilAkhir.melee.push(output[i][0]);
      }
    }
    return Object.values(hasilAkhir);
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
  // // // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping("")); // []