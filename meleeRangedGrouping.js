// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string,
 // implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.
//
// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...
//
// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
//
// Jika input adalah string kosong ('') maka return array kosong
//
// Submit Tugas Disini
//
function meleeRangedGrouping (str) {
  //your code here
  str=str+","
  var arrRes=[[],[]];
  var arrHero=[];
  var arrTipe=[];
  var strTemp='';
  var strTemp2='';
  var arrTemp=[];

  for(var i = 0; i<str.length; i++){
    if(str[i]!==","){
      strTemp+=str[i];
    } else {
      arrHero.push(strTemp);
      strTemp='';
    }
  }
  // console.log(arrHero);

  for(var j=0; j<arrHero.length; j++){
    arrTipe.push([]);
    for(var k=0; k<arrHero[j].length; k++){
      if(arrHero[j][k]==="-"){
        arrTipe[j].push(strTemp2);
        strTemp2='';
      }else if(k===arrHero[j].length-1){
        arrTipe[j].push(strTemp2)
        strTemp2='';
      }else {
        strTemp2+=arrHero[j][k]
      }
    }
  }
  // console.log(arrTipe);

  for(a=0; a<arrTipe.length; a++){
    for(b=0; b<arrTipe[a].length; b++){
      if(arrTipe[a][b]==="Range"){
        arrRes[0].push(arrTipe[a][0]);
      }if(arrTipe[a][b]==="Mele"){
        arrRes[1].push(arrTipe[a][0]);
      }
    }
  }

  // console.log(arrRes);
  if(str.length===1){
    return []
  }

  return arrRes


}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
// ["Razor-Ranged",....]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
//
console.log(meleeRangedGrouping('')); // []
