function meleeRangedGrouping (str) {
    //your code here
    if(str===''){
        return []
    }
    str = str.split(',')
    let arr = [[],[]]
    for(let i=0;i<str.length;i++){
        str[i] = str[i].split('-')
        if(str[i][1]==='Ranged'){
            arr[0].push(str[i][0])
        }else{
            arr[1].push(str[i][0])
        }
    }
    return arr
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []