function meleeRangedGrouping (str) {
    //your code here

    if(!str){
        return []
    }
    var arrHasil = [[],[]]
    var arrHero = str.split(',')
    var arrHeroSort = []
    

    for (let i = 0; i < arrHero.length; i++) {
        
        arrHeroSort.push(arrHero[i].split('-'))
        
        if (arrHeroSort[i][1] == 'Ranged') {

            arrHasil[0].push(arrHeroSort[i][0])
        } else if(arrHeroSort[i][1] == 'Melee') {

            arrHasil[1].push(arrHeroSort[i][0])
        }

    }
    
    
    return arrHasil
    

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []