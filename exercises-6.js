function meleeRangedGrouping (str) {
    var arrHero = str.split(',');
    var hero = '';
    var tipe = '';
    var hasil = [[],[]];
    var isTipe = false;

    for(var i = 0; i<arrHero.length; i++){
        hero = '';
        tipe = '';
        isTipe = false;
        for(var j = 0; j<arrHero[i].length; j++){
            if(arrHero[i][j] !== '-' && isTipe == false){
                hero += arrHero[i][j];
            }
            else if(arrHero[i][j] !== '-' && isTipe == true){
                tipe += arrHero[i][j];
            }
            else{
                isTipe = true;
            }
        }
        
        if(tipe == 'Ranged'){
            hasil[0].push(hero);
        }
        else if(tipe == 'Melee'){
            hasil[1].push(hero);
        }
    }
    return hasil;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []