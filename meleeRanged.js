function meleeRangedGrouping (str) {
    //your code here
    //BERUSAHA TANPA SPLIT FUNCTION
    //MENGGUNAKAN INDEX/FLAG DARI POIN2 KOMA DAN STRIP
    //JIKA ADA ALTERNATIF SELAIN CARA INI BOLEH MASUKANNYA

    var hasilFinal = []

    var koma = [0]
    
    var hasilAwal = []
    
//............PISAH BY KOMA...........//

    for(var i=0; i<str.length; i++){
        //console.log(str[i])
        if(str[i] === ","){
            //console.log(str[i])
            var indexKoma = i
            //console.log(indexKoma)
            koma.push(indexKoma)
        }

    }
    //console.log(koma)
    koma.push(str.length)

    //console.log(koma)
    
    
    for(var j=0;j<koma.length;j++){
        //console.log(koma[j])
        var tampung = ""
        for(var k=koma[j]; k<koma[j+1]; k++){
            if(str[k]!==","){
            tampung+=str[k]
            }

        }
        //console.log(tampung)
        hasilAwal.push(tampung)
    }

    //console.log(hasilAwal)

//..............PISAH BY STRIP...........//

   
    var ranged = []
    var melee = []

   for(var l=0; l<hasilAwal.length; l++){

       var hasilKedua = []
       //console.log(hasilAwal[l])
       var strip = [0]
       for(var m=0; m<hasilAwal[l].length; m++){
        //console.log(hasilAwal[l][m])
        if(hasilAwal[l][m] === "-"){
            //console.log(hasilAwal[l][m])
            var indexStrip = m
            //console.log(indexStrip)
            strip.push(indexStrip)
            strip.push(hasilAwal[l].length)
        }

       }
       
       //console.log(strip)
       for(var n=0; n<strip.length; n++){
        //console.log(hasilAwal[l])
        //console.log(strip[n])
        var tampungLagi = ""
        for(var o = strip[n]; o < strip[n+1]; o++){
            //console.log(o)
            //console.log(hasilAwal[l][o])
            if(hasilAwal[l][o]!=="-"){
            tampungLagi+=hasilAwal[l][o]
            }
        }
        //console.log(tampungLagi)
        hasilKedua.push(tampungLagi)
       }
       
//...........PENGELOMPOKAN.............//
//MASIH DALAM LOOP VAR L

       //console.log(hasilKedua)
       //console.log(hasilKedua[1])
       if(hasilKedua[1] ==="Ranged"){
            ranged.push(hasilKedua[0])
       }else if(hasilKedua[1] ==="Melee"){
            melee.push(hasilKedua[0])
       }

   }

   //console.log(ranged)
   //console.log(melee)
   hasilFinal.push(ranged, melee)
   return hasilFinal

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []