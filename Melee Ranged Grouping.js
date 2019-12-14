function meleeRangedGrouping (str) {
    let hasil = []
    let namaRole = ''
    let tmp = []
    for(let i=0; i<str.length; i++) {
        if (str[i] === '-' || str[i] === ',') {
            tmp.push(namaRole)
            namaRole = ''
        }else{
            namaRole += str[i]
        }
        if (i === str.length-1) {
            tmp.push(namaRole)
            namaRole = ''
        }
    }
    for(let i=0; i<tmp.length; i++) {
        if (hasil.length === 0) {
            hasil.push([],[])
        }
        if (tmp[i] === 'Ranged') {
            hasil[0].push(tmp[i-1])
        }
        if(tmp[i] === 'Melee'){
            hasil[1].push(tmp[i-1])
        }
    }
    return hasil
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []