//[Exercises 6] Melee Ranged Grouping

//Logic Challenge: Melee Ranged Grouping

function meleeRangedGrouping (str) {
    //your code here
    if (str === '') {
      return []
    }
    var container = []
    var containerWord = []
    var word = ''
    for (i = 0; i < str.length; i++) {
      if (str[i] === ',') {
        word = ''
      } else {
        word = word + str[i]
      }
      container.push(word)
    }
    str = str + ','
    for (i = 0; i < str.length; i++) {
      if (str[i] === ',') {
        containerWord.push(container.slice(i-1, i))
      }
    }
    var containerString = []
    var heroRanged = []
    var heroMeele = []
    for (var j = 0; j < containerWord.length; j++) {
      containerString.push(containerWord[j][0])
      if (containerString[j].indexOf('-Ranged') !== -1) {
        heroRanged.push(containerString[j])
      } else {
        heroMeele.push(containerString[j])
      }
    }
  
    for (var k = 0; k < heroRanged.length; k++) {
      heroRanged[k] = heroRanged[k].replace(/-Ranged/g, '');
    }
    for (var l = 0; l < heroMeele.length; l++) {
      heroMeele[l] = heroMeele[l].replace(/-Melee/g, '');
    }
    var hasil = [heroRanged].concat([heroMeele])  
    return hasil
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []