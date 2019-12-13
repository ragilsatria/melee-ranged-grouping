function meleeRangedGrouping (str) {
    
    let grouping = []
    let index = 0
    let tempString = ''
    let type = ['Ranged', 'Melee']

    if(str.length === 0){
        return grouping
    }

    //grouping
    for(i = 0; i < str.length + 1; i++){
        if(str[i] === '-'){
            grouping.push([])
            grouping[index].push(tempString)
            tempString = ''
        }else if(str[i] === ',' || str[i] === undefined){
            grouping[index].push(tempString)
            index++
            tempString = ''
        }else{
            tempString += str[i]
        }
    }

    let classified = []

    for(i = 0; i < type.length; i++){
        let empty = true
        let temp = []
        for(j = 0; j < grouping.length; j++){
            if(type[i] === grouping[j][1]){
                empty = false
                temp.push(grouping[j][0])
            }
        }
        classified.push(temp)
    }

    return classified

}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []