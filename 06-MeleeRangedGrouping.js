function meleeRangedGrouping (str) {
  //your code here
  if(!str){
    return []
  }
  var result = [[],[]]
  var newStr = ''
  for(var i = 0 ; i < str.length ; i++){
    if(str[i] === '-'){
      newStr+=' '
    }else if(str[i] === ','){
      newStr+=' '
    }else if(str[i] === ' '){
      newStr+='-'
    }else{
       newStr+=str[i]
    }

  }
  var strSplit = newStr.split(' ')
  for(var j = 0 ; j < strSplit.length ; j++){
    if(strSplit[j] === 'Ranged'){
      result[0].push(strSplit[j-1])
    }else if(strSplit[j] === 'Melee'){
      result[1].push(strSplit[j-1])
    }
  }
  
  for(k = 0 ; k < result.length ; k++){
    for(l = 0 ; l < result[k].length ; l++){
      for(m = 0 ; m < result[k][l].length ; m++){
        if(result[k][l][m] === '-'){
        result[k][l] = result[k][l].split('-').join(' ');
      }
      }
    }
  }
  return result
}


// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged,Ogre Mage-Melee'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeRangedGrouping('')); // []


