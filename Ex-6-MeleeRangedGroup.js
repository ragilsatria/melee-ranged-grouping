function meleeRangedGrouping (str) {
    //your code here
    var splitAwal = str.split (",")
    var Ranged = [];
    var Melee = []; 
    var arrTampungSementara = []
    var hasil = []
    // console.log (split)
    if (str.length == 0){return []};
    for (var i = 0; i < splitAwal.length; i++){
        arrTampungSementara.push(splitAwal[i].split("-"))
    }
    for (var j = 0;j < arrTampungSementara.length;j++){
        if (arrTampungSementara[j][1]=="Ranged"){
            Ranged.push(arrTampungSementara[j][0])
        } else if (arrTampungSementara[j][1]=="Melee"){
            Melee.push(arrTampungSementara[j][0])
        }
    }
    hasil.push (Ranged, Melee)
    return arrTampungSementara
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []