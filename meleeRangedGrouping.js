function meleeRangedGrouping (str) {
  //your code here
  let strSplit= str.split(',')
  let subArr =[]
  let arr=[];
  for( let i =0; i<strSplit.length; i++){
    subArr.push(strSplit[i])
    arr.push(subArr[i].split('-'))
    var obj={};
    for(let i=0; i<arr.length;i++){
      obj[arr[i][1]]=0
    }
  }
  var unique = Object.keys(obj)
  var result =[]
  if(str==''){
    return []
  }else{
    for(let i=0;i< unique.length;i++){
      var subres=[]
      for (let j = 0; j < arr.length; j++) {
        if(arr[j][1]==unique[i]){
          subres.push(arr[j][0])
        }
      }
      result.push(subres)
    }
    if(unique.length==1){
      result.push([])
    }
  }
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []