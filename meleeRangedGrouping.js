function meleeRangedGrouping (str) {
    //your code here
    let newArr = []
    let tempArr = []
    let temp = []
    let string = ""
    if(str.length < 1){
        return []
    }
    for (let i = 0; i <= str.length; i++) {
        if(str[i] == "-"){
            temp.push(string)
            string = ""
        }else if(str[i] == "," || i == str.length){
            temp.push(string)
            string = ""
            tempArr.push(temp)
            temp = []
        }else{
            string+=str[i]
        }
    }
    let rangedArr = []
    let meleeArr = []
    for (let j = 0; j < tempArr.length; j++) {
            if(tempArr[j][1] == "Ranged"){
                rangedArr.push(tempArr[j][0])
            }else if(tempArr[j][1] == "Melee"){
                meleeArr.push(tempArr[j][0])
            }
        
    }
    newArr.push(rangedArr,meleeArr)
    return newArr
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []