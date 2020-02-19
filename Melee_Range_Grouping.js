function meleeRangedGrouping (str) {
    if(str.length == 0) return [];
    var displayHeroTypeGroup = ['Ranged', 'Melee'];
    var result = [];

    var heroName = '';
    var heroType = '';
    var readHeroName = true;

    for(var i = 0; i < displayHeroTypeGroup.length;i++) {
        result.push([]);
    }

    for(var i = 0; i <= str.length; i++) {
        if(str[i] === '-') {
            readHeroName = false;
            heroType = '';
        } else if (str[i] === ',' || i == str.length) {
            readHeroName = true;

            for(var j = 0; j < displayHeroTypeGroup.length; j++) {
                if(displayHeroTypeGroup[j] == heroType) {
                    if (result[j] === undefined) result[j] = [];
                    result[j].push(heroName);
                    break;
                }
            }

            heroName = '';
            heroType = '';
        } else {
            if (readHeroName == true) {
                heroName += str[i];
            } else {
                heroType += str[i];
            }
        }
    }
    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []