function meleeRangedGrouping (str) {
    //your code here 
    let name = ''
    let hasil = []
    let typeRange = []
    let typeMelee = []

    if(!str){} 
    else{
    for (let i = 0; i < str.length; i++) {
      if (str[i]+str[i+1] == '-R') {
        typeRange.push(name)
        name = ''        
      } else if (str[i] + str[i+1] == '-M') {
        typeMelee.push(name)
        name = ''
      } else if (str[i] == ',') {
        name = ''
      } else {
        name += str[i]
      }
    }
    hasil.push(typeRange)
    hasil.push(typeMelee)
}
    return hasil    
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []

  // THE OTHER CASE By Me :D Please Don't be Rude ^,^ ID DOTA : @Diezzy
  console.log(meleeRangedGrouping('Baxia-Melee,Invoker-R , Rikimaru-M , Bat Rider -Ranged'));
  