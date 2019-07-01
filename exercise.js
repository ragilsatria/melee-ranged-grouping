function meleeRangedGrouping (str) {
  //your code here
  let group;
  if(str === ''){
    group = [];
  }else{
    group = [[],[]];
    str = str.split(',');
  }
  for(let i in str){
    let str2 = str[i].split('-');
    if(str2[1] === 'Ranged'){
      group[0].push(str2[0]);
    }else if(str2[1] === 'Melee'){
      group[1].push(str2[0]);
    }
  }

  return group;

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []