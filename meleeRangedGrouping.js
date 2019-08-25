//Logic Challenge: Melee Ranged Grouping

function meleeRangedGrouping (str) {
    //your code here
    var result = [];
    var groupping = [];
    var arrayHero = [];
    var temp = '';
    if (str.length === 0) {
        return result;
    } else {
         //split manual
        for (var i = 0; i <= str.length; i++) {
            if (str[i] === '-') {
                arrayHero.push(temp);
                temp = '';
            } else if (str[i] === ',' || i === str.length) {
                arrayHero.push(temp);
                groupping.push(arrayHero);
                arrayHero = [];
                temp = '';
            } else {
            temp += str[i]
            }
        }
        //pengelompokan
        var range = [];
        var meele = [];
        for (var i = 0; i < groupping.length; i++) {
            var kata = groupping[i];
            if (kata[1] === 'Ranged') {
                range.push(kata[0]);
            } else if (kata[1] === 'Melee'){
                meele.push(kata[0]);
            }
        }
        result.push(range);
        result.push(meele);
        return result;
    }
};
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []