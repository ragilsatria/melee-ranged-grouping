function meleeRangedGrouping (str) {
    //your code here
    var res = []
    var arr = str.split(',')
    var ranged = []
    var melee = []
    if(str.length < 1){return res}
    for(let i = 0; i < arr.length; i++)
    {
        let temp = arr[i].split('-')
        if(temp[1] == 'Ranged')
        {
            ranged.push(temp[0])
        }
        else if(temp[1] == 'Melee')
        {
            melee.push(temp[0])
        }
    }
    res.push(ranged)
    res.push(melee)
    return res
  }
 
  function meleeRangedGroupings (str) {
    //your code here
    function isExist(arr, str){for(let i = 0; i < arr.length; i++){if(arr[i] == str){return true}}return false}
    var res = []
    var arr = str.split(',')
    var type = []
    if(str.length < 1){return res}
    for(let i = 0; i < arr.length; i++)
    {
        let temp = arr[i].split('-')
        if(!isExist(type,temp[1])){type.push(temp[1])}
    }
    for(let  j = 0; j < type.length; j++)
    {
        let subArr = []
        for(let i = 0; i < arr.length; i++)
        {
            let temp = arr[i].split('-')
            if(temp[1] == type[j]){subArr.push(temp[0])}
        }
        res.push(subArr)
    }
    return res
  }

  // TEST CASE
  
  console.log(meleeRangedGroupings('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGroupings('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
