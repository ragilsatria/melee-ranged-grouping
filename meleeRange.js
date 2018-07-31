function meleeRangedGrouping (str) {
  if(str===''){
    return [];
  } else{
    let a = str.split(',');
  let result =[];

  for(let i = 0; i< a.length;i++){
    result.push(a[i].split('-'));
  }


  let result2 = [];
  let range = [];
  let melee = [];

  for(let i = 0;i<result.length;i++){
    if(result[i][1]==='Ranged'){
      range.push(result[i][0]);
    } else{
      melee.push(result[i][0]);
    }
  }

  result2.push(range);
  result2.push(melee);
  return result2;
  }

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []