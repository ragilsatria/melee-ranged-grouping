function meleeRangedGrouping (str) {
  str = str + ',' //dimasukin biar dipaling terakhir snipernya Masuk
  var arrLuar = [[],[]];
  var arrHero = [];
  var arrTipeHero = [];
  var temp = '';
  var temp2 = '';

  for(var i = 0; i<str.length; i++){ //ini biar string nya dimasukin ke 1 array jadi [Razor-Ranged, Invoker-Ranged] dan seterusnya
    if(str[i]!==","){
      temp+=str[i];
    } else {
      arrHero.push(temp);
      temp ='';
    }
  }

  console.log(arrHero)

  for (var j=0; j < arrHero.length; j++) {  //di pisahin menjadi array multidimensi per hero menjadi [[Razor,Range],[invoker,range]] begitu..
    arrTipeHero.push([]);
    for (var k=0; k < arrHero[j].length; k++) {
      if(arrHero[j][k] === '-') {
        arrTipeHero[j].push(temp2);
        temp2 = '';
      } else if (k === arrHero[j].length - 1) {
        arrTipeHero[j].push(temp2)
        temp2 = '';
      } else {
        temp2 += arrHero[j][k]
      }
    }
  }
  // console.log(arrTipeHero)


  for (var l=0; l < arrTipeHero.length; l++) { //push keluar yg range ato melee ke arrayLuar
    for (var m=0; m < arrTipeHero[l].length; m++) {
      if(arrTipeHero[l][m] === 'Range') {
        arrLuar[0].push(arrTipeHero[l][0])
      } else if (arrTipeHero[l][m] === 'Mele') {
        arrLuar[1].push(arrTipeHero[l][0])
      }
    }
  }
  

  return arrLuar
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  // console.log(meleeRangedGrouping('')); // []