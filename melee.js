function meleeRangedGrouping (str) {

    var splitted = []
    var perWord = ''
    for (i = 0; i < str.length; i++) {
         if (str[i] !== '-' && str[i] !== ',') {
           perWord += str[i]
         }
         if (str[i] === '-' || str[i] === ',') {
            splitted.push(perWord)
            perWord = ''
         }
         if (i === str.length - 1) {
            splitted.push(perWord)
            perWord = ''
        }
    }
    // console.log(splitted)
    // output {ranged : [], melee : []}

    var heroType = {}
    var rangeOrMeelee = []
    for (j = 0; j < splitted.length ;j+=2) { 
        rangeOrMeelee.push([splitted[j], splitted[j+1]])
    }
    // console.log(rangeOrMeelee)


     for (k = 0; k < rangeOrMeelee.length ; k++) {
         if (!heroType[rangeOrMeelee[k][1]]) {
            heroType[rangeOrMeelee[k][1]] = []
         }
         heroType[rangeOrMeelee[k][1]].push(rangeOrMeelee[k][0])
     } 
    // console.log(rangeOrMeelee)
    // console.log(heroType)
    var heroGroup = Object.values(heroType)
    var arrKosong = []
    if (heroGroup.length === 1) {
        heroGroup.push(arrKosong)
    } 
    return heroGroup
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []