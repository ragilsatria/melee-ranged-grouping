function meleeRangedGrouping (str) {
    var result = []
    
    if(str.length == 0) {
        return result
    }
    
    // function split
    function split(str,opr) {
        str += opr
        var temp = []
        var tampung = ''
        for(var i = 0; i < str.length; i++) {
            if(str[i] !== opr) {
                tampung += str[i]
            } else if(str[i] == opr && tampung.length > 0) {
                temp.push(tampung)
                tampung = ''
            }
        }
        return temp
    }
    // akhir function split

    // split parameter str
    var splitKoma = split(str, ',')
    var hero = []
    for(var a = 0; a < splitKoma.length; a++) {
        hero.push(split(splitKoma[a], '-'))
    }
    // akhir split

    // memisahkan hero ke dalam array sesuai dengan tipenya
    var ranged = [];
    var melee = [];
    for(var j = 0; j < hero.length; j++) {
        if(hero[j][1] == 'Ranged') {
            ranged.push(hero[j][0])
        } else if(hero[j][1] == 'Melee') {
            melee.push(hero[j][0])
        }
    }
    result.push(ranged,melee)
    return result
}
  
// TEST CASE
  
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
console.log(meleeRangedGrouping('')); // []
