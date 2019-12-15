function meleeRangedGrouping (str) {
    var newStr = str.split(',');
    var temp=[];
    var ranged=[];
    var melee=[];
    var result=[];
    for(let i=0; i<newStr.length; i++)
    {
        var temp = newStr[i].split('-');
        if(temp[1]==='Ranged')
        {
            ranged.push(temp[0]);
        }
        else if(temp[1]==='Melee')
        {
            melee.push(temp[0]);
        }
        temp=[];
    }
    if(ranged.length===0 && melee.length===0)
    {
        return result;
    }
    result.push(ranged);
    result.push(melee);
    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []