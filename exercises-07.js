function meleeRangedGrouping(str){
    //your code here
    var result= []
    var melee = []
    var ranged = []

    if(str){
        var heroList = []
    var temp = ''
    for(var char of str){
      if(char !== ','){
        temp += char
      }
      else if(char === ','){
        heroList.push(temp)
        temp = ''
      }
    }
    heroList.push(temp)
  
    for(var hero of heroList){
        var heroName = ''
        var heroType = ''
        for(var char of hero){
            if(char !== '-'){
                heroName += char
            }
            else{
                heroType = hero.slice(heroName.length + 1)
                break
            }
        }
        if(heroType === 'Ranged'){
            ranged.push(heroName)
        }
        else{
            melee.push(heroName)
        }
        
    }
    result.push(ranged,melee)

    }
    return result
  }
  
  // TEST CASE
  
  // console.log(meleeRangedGrouping('Sniper-Ranged'));
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []