function meleeRangedGrouping (str) {
    var pisah1 = str.split(',')
    var kumpulan = []
    var hasil = [[],[]]
    if (!str){
        return []
    }
    for (var i = 0; i < pisah1.length; i++){
        var pisah2 = pisah1[i].split('-')
        kumpulan.push(pisah2)
    }
    for (var j=0; j < kumpulan.length; j++){
        if (kumpulan[j][1] === 'Ranged'){
            hasil[0].push(kumpulan[j][0])
        }
        else{
            hasil[1].push(kumpulan[j][0])
        }
    }
    return hasil
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []