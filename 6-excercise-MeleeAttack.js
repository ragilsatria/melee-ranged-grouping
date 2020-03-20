function meleeRangedGrouping (str) {
  //your code here

  // Methode untuk split dan grouping
  var method = {
    spliting(arr, by){
      let str = '';
      const hasil = [];
      for(let i = 0; i <= arr.length; i++){
        if(arr[i] === by || i === arr.length) {
          hasil.push(str);
          str = '';
        }else if(arr[i] !== by) str += arr[i];
      }
      return hasil;
    },
    grouping(arr, indexOfGroup, indexToBeGrouped){
      const obj = {
        Ranged: [],
        Melee: []
      }
      const arrHasil = [];
      for(let i = 0; i < arr.length; i++){
        if(!obj[arr[i][indexOfGroup]]){
          obj[arr[i][indexOfGroup]] = [arr[i][indexToBeGrouped]];
        }else obj[arr[i][indexOfGroup]].push(arr[i][indexToBeGrouped]);
      }
      for(let key in obj) {
        // if(obj[key][0].length)
          arrHasil.push(obj[key]);
      }
      if(obj["Melee"].length === 0 && obj["Ranged"].length === 0) return [];
      return arrHasil;
    }
  }

  // Proses Spliting
  const splitPlayers = method.spliting(str, ",");
  const splitMeleeRanged = [];
  for(let i = 0; i < splitPlayers.length; i++){
    splitMeleeRanged.push(method.spliting(splitPlayers[i], "-"));
  }

  // Proses Grouping
  return method.grouping(splitMeleeRanged, 1, 0);
}


// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []