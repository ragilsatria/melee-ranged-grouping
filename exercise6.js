function meleeRangedGrouping (str) {
    //your code 
    if(str.length === 0){
        return []
    }
    var hero = str.split(',')
    // console.log(hero)
    var name = []
    var type = []
    for(let i=0; i<hero.length; i++){
        var heroName = hero[i].split('-')
        name.push(heroName[0])
        type.push(heroName[1])
    }
    var melee = []
    var ranged = []
    for (let i=0; i<type.length;i++){
        if(type[i] === 'Ranged'){
            ranged.push(name[i])
        } else if(type[i] === 'Melee'){
            melee.push(name[i])
        }
    }
    return [ranged, melee]
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []