function meleeRangedGrouping (str) {
  //your code here
  if(str.length === 0){
    return []
  }
  
  var kata = '';
  var kotak = [];
  var tampung = [];
// split str setiap bertemu tanda ',' dan ditaro di dalam kotak
  for(var i = 0; i <= str.length; i++){
  if( str[i] === ',' || i === str.length){
    kotak.push(kata)
    kata = ''
  }else {
    kata += str[i]
  }
}
kata  = ''
//membuat kotak kosng didalam tampung sesuai dengan panjangnya variable kotak
  for(var i = 0; i < kotak.length; i++){
    tampung.push([])
  }
  //memasukkan isi variable kotak kedalam tampung dan dipisash setiap bertmu dgn tanda '-'
   for(var i = 0; i < tampung.length; i++){
     for(var j = 0; j <= kotak[i].length; j++){
       if(kotak[i][j] === '-' || j === kotak[i].length){
         tampung[i].push(kata)
         kata = ''
       }else {
         kata += kotak[i][j]
       }
     }
   }
   //membuat 2 kotak kosong  di dalam variable Display untuk pengelompokkan 
   var display = []
   for(var i = 0; i < 2; i++){
     display.push([])
   }
   for(var i = 0; i < tampung.length; i++){
    if(tampung[i][1] === 'Ranged'){
      display[0].push(tampung[i][0])
    }else {
      display[1].push(tampung[i][0])
    }
  }
  return display
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []