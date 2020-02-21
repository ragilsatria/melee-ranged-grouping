function meleeRangedGrouping (str) {
  //your code here
  if(str == ''){
      return []
  }
  var array = []
  var temp = []
  var koma = []
  var strip = []
  var hasil = [[],[]]
  var isi
  
  for(var i = 0; i < str.length; i++){
      if(str[i] == ','){
        koma.push(i)
      }
  }
  for(var i = 0; i < koma.length; i++){
      isi = ''
      if( i == 0){
        for(var j = 0; j < str.length; j++){
            if(j < koma[i]){
                isi += str[j]
              }
        }
      }else{
        for(var j = koma[i-1]+1; j < str.length; j++){
            if(j < koma[i]){
                isi += str[j]
              }
        }
      }
      array.push(isi)
  }
  isi = ''
  for(var i = koma[koma.length-1] + 1; i < str.length; i++){
      isi += str[i]
  }
  array.push(isi)

  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array[i].length; j++){
        if(array[i][j] == '-'){
            strip.push([i,j])
        }
    }
  }

  for(var i = 0; i < strip.length; i++){
      isi = ''
      for(var j = 0; j < array[strip[i][0]].length; j++){
          if(j < strip[i][1]){
            isi += array[strip[i][0]][j]
          }else if(j > strip[i][1]){
            isi += array[strip[i][0]][j]
          }else{
              temp.push(isi)
              isi = ''
          }
      }
      temp.push(isi)
  }

  for(var i = 1; i < temp.length; i = i + 2){
      if(temp[i] == 'Ranged'){
        hasil[0].push(temp[i-1])
      }else if(temp[i] == 'Melee'){
        hasil[1].push(temp[i-1])
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