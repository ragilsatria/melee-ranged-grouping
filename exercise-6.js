function meleeRangedGrouping (str) {
  var namaHero = str.split(',');
  var hasil = [];
  var mele = [];
  var ranged = [];

  if (str !== '') {
    for (var i = 0; i <= namaHero.length - 1; i++) {
      var nama = namaHero[i].split('-');

      if(nama[1] === 'Ranged') {
        ranged.push(nama[0]);
      }
      else {
        mele.push(nama[0]);
      }
    }
  hasil.push(ranged);
  hasil.push(mele);
  }
  else {
    return [];
  }
  
  return hasil;
  //your code here
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []