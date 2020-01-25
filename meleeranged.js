function meleeRangedGrouping (str) {
    //your code here
    if(str.length === 0){
        return [];
    }

    var newArr = [];
    var newStr = "";
    for(var i = 0; i < str.length; i++){
        newStr += str[i];
        if(str[i] === ","){
            var newStr2 = newStr.substring(0,newStr.length-1)
            newArr.push(newStr2);
            newStr = "";
        }
        else if(i === str.length-1){
            newArr.push(newStr);
            newStr = ""; 
        }
    }

    var arrNew2 = [];
    for(var j = 0; j < newArr.length; j++){
        var name = "";
        var role = "";
        for(var k = 0; k < newArr[j].indexOf("-"); k++){
            name += newArr[j][k];
        }

        for(var l = newArr[j].indexOf("-")+1; l < newArr[j].length; l++){
            role += newArr[j][l]
        }
        
        arrNew2.push([name,role])
    }

    var ranged = [];
    var melee = [];
    for(var m = 0; m < arrNew2.length; m++){
        if(arrNew2[m][1] === "Ranged"){
            ranged.push(arrNew2[m][0]);
        }
        else if (arrNew2[m][1] === "Melee"){
            melee.push(arrNew2[m][0]);
        }
    }

    var result = [];
        result.push(ranged);
        result.push(melee);
    

    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []