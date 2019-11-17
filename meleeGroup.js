function meleeRangedGrouping(str) {
  //your code here
  var string = "";
  var split1 = [];
  var temp = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "-") {
      temp.push(string);
      string = "";
    } else if (str[i] === ",") {
      temp.push(string);
      split1.push(temp);
      temp = [];
      string = "";
    } else {
      string += str[i];
    }
  }
  temp.push(string);
  split1.push(temp);

  var ranged = [];
  var melee = [];

  for (var i = 0; i < split1.length; i++) {
    if (split1[i][1] === "Ranged") {
      ranged.push(split1[i][0]);
    } else {
      melee.push(split1[i][0]);
    }
  }

  return str.length === 0 ? "[]" : [ranged, melee];
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
