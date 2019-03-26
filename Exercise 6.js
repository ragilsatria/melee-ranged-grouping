function meleeRangedGrouping (str) {
    
    var sk = str.split(",")
    var ss = []

    if(str.length == 0){
        return [];
    }

    for(i=0;i<sk.length;i++){
        ss.push(sk[i].split("-"));
    }

    var utama = [], ranged =[], melee = []
    for(j=0;j<ss.length;j++){
        if(ss[j][1] === "Ranged"){
            ranged.push(ss[j][0])
        }
        else if (ss[j][1] === "Melee"){
            melee.push(ss[j][0])
        }
    }

utama.push(ranged, melee)
return utama;

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []