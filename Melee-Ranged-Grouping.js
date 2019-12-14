function meleeRangedGrouping (str) {
  //your code here
  if(str.length == 0){
      return "[]"
  }
  let output = [[],[]]
  let tampungHero = []
  let string = ""
  for(i=0;i<str.length;i++){
    if(str[i]==","){
        tampungHero.push(string)
        string = "" 
    }else if(i == str.length-1){
        string = string + str[i]
        tampungHero.push(string)
        string = ""
    } else  string = string + str[i]
  } 
  let tampungHero1 = []
  let string1 = "" 
  for(j=0;j<tampungHero.length;j++){
    tampungHero1.push([])
      for(k=0;k<tampungHero[j].length;k++){
          if(tampungHero[j][k] == "-"){
              tampungHero1[j].push(string1)
              string1 = ""
          }else if(k == tampungHero[j].length -1){
            string1=string1 +tampungHero[j][k]
            tampungHero1[j].push(string1)
              string1 = ""
          }else string1=string1 +tampungHero[j][k]
      }
  } 
  for(a=0;a<tampungHero1.length;a++){
      if(tampungHero1[a][1] == "Ranged"){
          output[0].push(tampungHero1[a][0])
      } else if(tampungHero1[a][1] == "Melee"){
        output[1].push(tampungHero1[a][0])
      }
  } return output
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []