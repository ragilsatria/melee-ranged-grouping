function meleeRangedGrouping (str) {
  //your code here
    var arrStrip= str.split(",");

    var ranged=[];
    var melee=[];
    for (var i=0; i< arrStrip.length; i++){
        var arrColon= arrStrip[i].split("-");

            if (arrColon[1] == "Melee" ){
                melee.push(arrColon[0]);
            } else{
                ranged.push(arrColon[0]);
            }

    }

    if (str.length == 0){
        return [];
    }
  return [ranged, melee];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []