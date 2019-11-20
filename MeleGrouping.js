
function meleeRangedGrouping (str) {
    if (str === '') {
        return '[]'
    }
    let hasil = str.split(',')
    let show = [[],[]]
    for (let i = 0; i < hasil.length; i++) {
        hasil[i] = hasil[i].split('-')
        if (hasil[i][1] === 'Ranged') {
            show[0].push(hasil[i][0])
        } else if (hasil[i][1] === 'Melee') {
            show[1].push(hasil[i][0])
        }
    }
    return show
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []