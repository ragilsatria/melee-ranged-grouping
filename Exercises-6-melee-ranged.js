function meleeRangedGrouping (str) {
  
  if(!str.length){
    return ""
  }
  
  //pisahkan koma
  var arr = []
  var text = ""
  for (var i = 0; i < str.length; i++) {
    if(str[i] === ","){
      arr.push(text);
      text = ""
    } else {
      text += str[i];
    }
  }
  
  arr.push(text)
//   console.log(arr)
 
 // remove dash
  var arr1 =[]
  var heroes = [[], []]
    for(var j = 0; j < arr.length; j++){
      arr1.push(arr[j].split("-"));
    }
//   console.log(arr1)
  
  //group each heroes with their weapons
    for(var k = 0; k < arr1.length; k++){
//     console.log(arr1[k])
      if(arr1[k][1] === "Ranged"){
//       console.log(arr1[k][1])
          heroes[0].push(arr1[k][0]);
      } else if (arr1[k][1] === "Melee"){
          heroes[1].push(arr1[k][0]);
      }
    }
     return heroes
}
 // TEST CASE
 console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
 console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
 console.log(meleeRangedGrouping('')); // [] 