console.log('Exersice 6 - Melee Ranged Grouping \n');

function meleeRangedGrouping(str) {
    if(str.length>0){

        var newStr = [];
        var tempWrd = '';
        //Rearrange into array
        for(var i = 0; i<str.length;i++){
            if(str[i]!==','){
                tempWrd = tempWrd + str[i];
            }else if(str[i]===','){
                newStr.push(tempWrd);
                tempWrd = '';
            }
        }
        newStr.push(tempWrd);

        //Group into melee and ranged
        var meleeArr =[];
        var rangedArr = [];
        for(var j = 0;j<newStr.length;j++){
            if(newStr[j].substr(newStr[j].length-7)==='-Ranged'){
                var batasRanged = newStr[j].length-7;
                rangedArr.push(newStr[j].substr(0,batasRanged));

            }else if(newStr[j].substr(newStr[j].length-6)==='-Melee'){
                var batasMelee = newStr[j].length-6;
                meleeArr.push(newStr[j].substr(0,batasMelee));
            }   
        }
        //group into one big array
        var dotAHero = [];
        dotAHero.push(rangedArr);
        dotAHero.push(meleeArr);

        return dotAHero;
    }else{
        return '[]';
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []