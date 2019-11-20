function arrSplit(sentence){
  var arrSentence=[];
  var group="";
  for(var i=0; i<sentence.length; i++){
    if(sentence[i]!=="-" && sentence[i]!==","){
      group+=sentence[i];
  }else{
      arrSentence.push(group);
      group="";
      }
    }
  arrSentence.push(group);
  return arrSentence
}

function meleeRangedGrouping (str) {
  //your code here
  var arrGroup=[];
  var melee=[];
  var range=[];
  var strSplit=arrSplit(str);
  if(str.length===0){
    return []
  }else{
    for(var i=0; i<strSplit.length; i+=2){
      // var strSplit=arrSplit(str);
      if(strSplit[i+1]==="Ranged"){
        range.push(strSplit[i]);
      }else{ 
        melee.push(strSplit[i]);
      }
    }
  }
  arrGroup.push(range);
  arrGroup.push(melee);
  return arrGroup
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []

