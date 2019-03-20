function meleeRangedGrouping (str) {
    //your code here
    var result = []
    var temp = []
    var hero = ''
    var count = 0
    if(!str){
        return []
    }
    for(var i = 0 ; i < str.length ; i++){
        if(str[i] !== ',' && str[i] !== '-'){
            hero += str[i]
        }
        else{
            count += 1
            if(count % 2 === 0){
                temp.push(hero)
                hero = ''
                result.push(temp)
                temp = []
            }
            else{
                temp.push(hero)
                hero = ''
            }
        }
    }
    temp.push(hero)
    result.push(temp)
    var set = []
    for(var j = 0 ; j < result.length ; j++){
        var flag = false
        for(var k = 0 ; k < set.length ; k++){
            if(result[j][1] === set[k]){
                flag = true
            }
        }
        if(!flag){
            set.push(result[j][1])
        }
    }
    var output = []
    for(var x = 0 ; x < set.length ; x++){
        var heroes = []
        for(var y = 0 ; y < result.length ; y++){
            if(result[y][1] === set[x]){
                heroes.push(result[y][0])
            }
        }
        output.push(heroes)
    }
    if(output.length <= 1){
        output.push([])
    }
    return output
  }
  
  // TEST CASE
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  console.log(meleeRangedGrouping('')); // []