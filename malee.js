function meleeRangedGrouping (str) {
    //your code here
    
    var tipeRanger = '';
  
    var hasil = [];
    var hero = [];
    if (str.length) {
        for (var i = 0; i < str.length; i++) {
            
            tipeRanger += str[i];
            if (str[i + 1] == '-') {
                hero.push(tipeRanger);
                tipeRanger = '';
            } else if (str[i] == '-') {
                tipeRanger = '';
            }
            if ( str[i + 1] == ',') {
                hero.push(tipeRanger);
                
            }  else if (str[i] == ',') {
                tipeRanger = '';
            }   
            if (i == str.length-1) {
                hero.push(tipeRanger);
            }
           
        }
        // console.log(hero)
        var ranged = [];
        var melee = [];
        for (var j = 0; j < hero.length; j++) {
            if (hero[j] == 'Ranged') {
                ranged.push(hero[j - 1]);
            } else if (hero[j] == 'Melee') {
                melee.push(hero[j - 1]);
            }
        }
        hasil.push(ranged);
        hasil.push(melee);
        
        return hasil;

    } else {
        return [];
    }
    
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []