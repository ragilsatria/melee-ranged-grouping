function meleeRangedGrouping (str){
    var output = []
    var ranged = []
    var melee = []
    var tampung = []
    var arrSplit = str.match(/([^,]+)/g)
    if(str.length<=0){
        return []
    }
    for(var i=0;i<arrSplit.length;i++){
        tampung.push(arrSplit[i].match(/([^-]+)/g))
    }
    for(var j=0;j<tampung.length;j++){
        if(tampung[j][1]==='Ranged'){
            ranged.push(tampung[j][0])
        }else if(tampung[j][1]==='Melee'){
            melee.push(tampung[j][0])
        }
    }
    output.push(ranged,melee)
    return output
}
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []