function meleeRangedGrouping (str) {
    
    // Split (,)
    var eachHero = [];
    var temp = '';

    for (var i = 0; i <= str.length; i++)
    {
        if (str[i] === ','  ||  i === str.length){
            eachHero.push(temp);
            temp = '';
        }    
        else{
            temp += str[i];
        }
    }
    
    // Split (-)
    var heroName = [];

    for (var j = 0; j < eachHero.length; j++)
    {
        var tampung = [];
        var temp1 = '';

        for (var k = 0; k < eachHero[j].length; k++)
        {
            if (eachHero[j][k] === '-'){
                tampung.push(temp1);
                temp1 = '';
            }
            else{
                temp1 += eachHero[j][k];
            }
        }
        tampung.push(temp1);
        heroName.push(tampung);
    }

    // Grouping Berdasarkan Type_Hero
    var typeRanged = [];
    var typeMelee = [];
    var result = [];

    for (var l = 0; l < heroName.length; l++)
    {
        if (heroName[l][1] === 'Ranged'){
            typeRanged.push(heroName[l][0]);
        }
        else if (heroName[l][1] === 'Melee'){
            typeMelee.push(heroName[l][0]);
        }
    }
    result.push(typeRanged, typeMelee)

    //Kondisi untuk Output paling akhir
    if (str === '' || str === undefined || str.length === 0){
        return [];
    }

    return result;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []