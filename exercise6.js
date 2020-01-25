function meleeRangedGrouping (str) {
  //your code here
  if (str == ``){
      return `''`;
  }
  var range = [];
  var melee = [];

  var splitStr = str.split(`,`);
  
  for (i=0;i<splitStr.length;i++){
      var hero = ``;
      var temp = ``;
      for (j=0;j<splitStr[i].length;j++){
          var check = false;
          if (splitStr[i][j] == `-`){
              check = true;
              hero = temp;
              temp = ``;
          }
          if (!check){
              temp += splitStr[i][j]
          }
      }
      if (temp == `Ranged`){
          range.push(hero);
      }
      else if (temp = `Melee`){
          melee.push(hero);
      }
  }
  var display = [];
  display.push(range,melee);
  return display;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []