function meleeRangedGrouping (str) {
  //your code here
  var arr = [];
  var temp = [];
  var temp2 = [];
  var hero = '';
  for (var i = 0; i < str.length; i += 1){
    hero += str[i]
    if (str[i+1] == '-'){
      if (str[i+2] == 'R'){
        temp.push(hero)
        hero = ''
        i+=8
      } else if (str[i+2] == 'M'){
        temp2.push(hero)
        hero = ''
        i+=7
      }
    }
  }
  if (temp.length != 0 || temp2.length != 0){
    arr.push(temp,temp2)
  }
  console.log(arr)
  return ''
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []