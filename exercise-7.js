function meleeRangedGrouping(str) {
    //your code here
    var tempAll = ``;
    var all = [];

    //kondisi jika str tidak diisi
    if (str == '') {
        return [];
    }

    //pisah str berdasarkan koma (manual split)
    for (var a = 0; a < str.length; a++) {
        if (str.charAt(a) != ',') {
            tempAll += str.charAt(a);
        } else if (str.charAt(a) == ',') {
            all.push(tempAll);
            tempAll = '';
        }
    }
    all.push(tempAll);


    //pisah ranged dan melee hero berikut classnya
    var rangeAll = [];
    var meleeAll = [];
    for (var b = 0; b < all.length; b++) {
        if (all[b][all[b].length - 1] === 'd') {
            rangeAll.push(all[b]);
        } else if (all[b][all[b].length - 1] === 'e') {
            meleeAll.push(all[b]);
        }
    }

    //pisah hero name ranged dan melee tanpa job class nya
    var rangedName = ``;
    var ranged = [];
    for (var c = 0; c < rangeAll.length; c++) {
        for (var d = 0; d < rangeAll[c].length; d++) {
            if (rangeAll[c][d] != '-') {
                rangedName += rangeAll[c][d];
            } else if (rangeAll[c][d] == '-') {
                ranged.push(rangedName);
                rangedName = '';
                break;
            }
        }
    }

    var meleeName = ``;
    var melee = [];
    for (var e = 0; e < meleeAll.length; e++) {
        for (var f = 0; f < meleeAll[e].length; f++) {
            if (meleeAll[e][f] != '-') {
                meleeName += meleeAll[e][f];
            } else if (meleeAll[e][f] == '-') {
                melee.push(meleeName);
                meleeName = '';
                break;
            }
        }
    }

    //return sorted hero name by class
    var hero = [ranged, melee];
    return hero;

}



// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []