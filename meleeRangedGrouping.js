function meleeRangedGrouping (str) {
    //your code here
    if(str.length < 1) {
        return []
    }
    var melee = []
    var ranged = []

    var heroes = mySplit(str)
    for(var i = 0; i < heroes.length; i++) {
        if(heroes[i][1] === "Melee") {
            melee.push(heroes[i][0])
        } else if(heroes[i][1] === "Ranged") {
            ranged.push(heroes[i][0])
        }
    }
    return [ranged, melee]
  }
 
function mySplit(str) {
    var group = []
    var hero = []
    var heroName = ""

    for(var i = 0; i < str.length; i++) {
        if(str[i] === "-") {
            hero.push(heroName)
            heroName = ""
        } else if(str[i] === "," || i === str.length-1) {
            if(i === str.length-1) {
                heroName += str[i]
            }
            hero.push(heroName)
            group.push(hero)
            hero = []
            heroName = ""
        } else {
            heroName += str[i]
        }
    }
    return group
}
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []