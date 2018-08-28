function meleeRangedGrouping (str) {
    if (str === '') {
        return [];
    }
    else {
        // PISAH COMMA
        var resultComma = [];
        var strPlus = str + ',' // bisa diganti yg lain ga ya?
        var temp = '';
        for (var i=0; i<strPlus.length; i++) {
            if (strPlus[i] === ',') {
                resultComma.push(temp);
                temp = '';
            }
            else {
                temp += str[i];
            }
        }
        // console.log(resultComma);

        
        // PISAH -
        var resultStrip = [];
        for (var j=0; j<resultComma.length; j++) {
            // console.log(resultComma[j]);
            resultStrip.push(resultComma[j].split('-')); // klo ga split, pake nested looping
        }
        // console.log(resultStrip);


        // GROUPING MELEE vs RANGED
        var finalResult = [[], []]; // ranged VS melee
        for (var k=0; k<resultStrip.length; k++) {
            // console.log(resultStrip[k][1]);
            if (resultStrip[k][1] === 'Ranged') {
                finalResult[0].push(resultStrip[k][0]);
            }
            else if (resultStrip[k][1] === 'Melee') {
                finalResult[1].push(resultStrip[k][0]);
            }
        }
        return finalResult;
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []