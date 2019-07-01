function meleeRangedGrouping (str) {
  //your code here
  var nama=""
  var result=[]
  var melee=[]
  var ranged=[]
  var check= false
  for(var i=0; i < str.length; i++){
    if(str[i]==="-"){
        check = true
    }
    else if(check===true && str[i]==="R"){
        check = false
        ranged.push(nama)   
    }
    else if(check===true && str[i]==="M"){
        check = false
        melee.push(nama)   
    }
    else if(str[i]===","){
        nama=""
    }
    else{
        nama +=str[i]
    }
  }
  result.push(ranged)
  result.push(melee)
  return ranged.length === 0 && melee.length === 0 ? [] : result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []