function meleeRangedGrouping (str) {
    //your code here
    var jml =[]
    var spasi = ','
    
    // var tampung2 = []
    
    
    var y = ""//nampung kata
    // var z = ""
    str += spasi
    // var x = str.split(",")
    // console.log(x)

 

    for( var i = 0; i <= str.length; i ++ ){
      // jml2 = []
        if( str[i] !== spasi){
            y += str[i]
            
        } else if (str[i] === spasi && y.length>0){
          jml.push(y)
          y =""
          
        }
       
    }
    var tampung1 = []
    tampung2 = []
    var a = ''
    var strip = '-'
    // jml += strip

     for ( var i = 0; i < jml.length; i++){
       for ( var j = 0; j < jml[i].length; j++){
        if ( jml[i][j] !== strip){
          a += jml[i][j]
        } else if ( jml[i][j] == strip){
          tampung1.push(a)
          a = ''
        }
       }
       tampung1.push(a)
       a = ''
       tampung2.push(tampung1)
       tampung1 = []
    // var z = jml[i].split("-")
    // tampung1.push(z)

  }
  
  
  akhir = []
  hasilR = []
  hasilM = []
  for ( var i = 0; i < tampung2.length; i++){
    
    
    if (tampung2[i][1] == "Ranged"){
      hasilR.push(tampung2[i][0])
      // console.log(hasil)
      // ranged = []
      // return ranged
    } else{
      hasilM.push(tampung2[i][0])
    }
    
  }
  akhir.push(hasilR)
  akhir.push(hasilM)

  // 
  return akhir
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
//   // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  // console.log(meleeRangedGrouping('')); // []
//   console.log(meleeRangedGrouping('kuda-Rusak'))

  // console.log(meleeRangedGrouping('Miya-Ranged,Tigreal-Melee,Wanwan-Ranged'));