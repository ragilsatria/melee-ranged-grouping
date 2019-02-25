/**
 * exercise 7: Melee Ranged Grouping 
 * 
 */

function meleeRangedGrouping (str) {
    //your code here
    var ranged = [], melee = [];
    var splited = str.split(',');
    var res =[]
      
    if(str === '') {
        return [];
    }
    else {
        for(var i=0;i<splited.length;i++) {
            let group = splited[i].substring(splited[i].indexOf('-')+1);
            let name = splited[i].substring(0,splited[i].indexOf('-'));

            if(group === 'Ranged') {
                ranged.push(name)
            }
            else if(group === 'Melee') {
                melee.push(name)
            }
        }

        res.push(ranged,melee)
        return res;
    }
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []