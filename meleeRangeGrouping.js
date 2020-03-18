function meleeRangedGrouping (str) {
    var result = [];
    var arrMelee = [];
    var arrRanged = [];
    var temp = '';
    var heroName = '';
    var className = '';

    for(i = 0; i < str.length; i++){
        // step to get hero name and class name in input str
        if(str[i] == '-'){
            var heroName = temp;
            temp = '';
        }
        else if(str[i] == ','){
            var className = temp;
            temp = '';
        }
        else if(i == str.length -1){
            temp += str[i]
            var className = temp;
        }
        else{
            temp += str[i];
        }
        //add hero name to their group array
        if(className == 'Ranged'){
            arrRanged.push(heroName);
            heroName = '';
            className = '';
        }
        else if(className == 'Melee'){
            arrMelee.push(heroName);
            heroName = '';
            className = '';
        }
    }
    result.push(arrRanged, arrMelee);
    
    //handling empty input
    var flag = true;
    for(i = 0; i < result.length; i++){
        if(result[i].length != 0){
            flag = false;
        }
    }
    if(flag){
        return [];
    }
    
    
    
    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []