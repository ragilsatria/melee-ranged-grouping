function meleeRangedGrouping (str) {
    //your code here
  /*
  Langkah berpikir
  1. Pisahkan ranged dan melee ke masing2 array baru
  2. Pisahkan '-'
  3. Bikin objek, keys: ranged/melee, values: isi masing2 array
  4. Result berupa values dari masing2 keys
  */
  
  var newgroup = str.split(',');
  var meleegroup = [];
  var rangedgroup = [];
  
  //Memisahkan array Ranged dan Melee
  for (var i = 0; i < newgroup.length; i++) {
      for (var j = 0; j < newgroup[i].length; j++) {
          if (newgroup[i][j] == '-' && newgroup[i][j+1] == 'R') {
              rangedgroup.push(newgroup[i]);
          }
          if (newgroup[i][j] == '-' && newgroup[i][j+1] == 'M') {
              meleegroup.push(newgroup[i]);
          }
      }
  }
  
  //Memisahkan '-'
  var newranged = [];
  for (var p = 0; p < rangedgroup.length; p++) {
          newranged[p] = rangedgroup[p].split('-');
      }
  
  var newmelee = [];
  for (var q = 0; q < meleegroup.length; q++) {
          newmelee[q] = meleegroup[q].split('-');
      }    
  
  //Membuat objek, dengan keys: ranged and melee
  var obj = {
              ranged: [],
              melee: []
            };//keys : values => ranged: razor, invoker, sniper;
  
  for (r = 0; r < newranged.length; r++) {
      obj.ranged.push(newranged[r][0]);
  }
  
  for (s = 0; s < newmelee.length; s++) {
      obj.melee.push(newmelee[s][0]);
  }
  //return obj;
  
  //OUTPUT
  var output = [obj.ranged, obj.melee];
  if (!str) {
      return []
  } else {
      return output;
  }
  
  
  }
  
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []