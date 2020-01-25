function meleeRangedGrouping (str) {
  //your code here
  if(str.length === 0){
      return [];
  }
  var range = [];
  var melee = [];
  var temp = '';
  for(var i = 0 ; i < str.length - 1 ; i ++){
    if(str[i] === '-' && str[i+1] === 'R'){
        range.push(temp);
    }
    else if(str[i] === '-' && str[i+1] === 'M'){
        melee.push(temp);
    }
    else if(str[i] === ','){
        temp = '';
    }
    else{
        temp += str[i];
    }
  }
  var hasil = [];
  hasil.push(range);
  hasil.push(melee);
  return hasil;

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []