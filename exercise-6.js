function meleeRangedGrouping (str) {
  if (!str) return []
  let hero = str.split(',').map(h => { return { nama: h.split('-')[0], tipe: h.split('-')[1] } })
  let ranged = hero.filter(h => h.tipe === 'Ranged').map(h => h.nama)
  let melee = hero.filter(h => h.tipe === 'Melee').map(h => h.nama)
  return [ranged, melee]
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'))
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'))
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')) // []
