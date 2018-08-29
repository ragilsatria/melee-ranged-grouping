function meleeRangedGrouping (str) {
    /*
    split text berdasarkan ',' menjadi array [[nama],[melee]]
    looping melee, bila melee=ranged, push ke array result[0][0]
    bila melee=ranged, push ke array result[0][1]
    */
    //console.log(str.length)
    //masukkan kedalam array, dipisahkan berdasarkan koma 
    var result =[
        [], // 0
        [] // 1
    ]
    var sementaraArr = []
    var sementara=''
    for (i=0; i<str.length; i++){
        if(str[i]===','){
            sementaraArr.push(sementara)
            sementara=''
        } else {
            sementara=sementara+str[i]
        }
        //sementara=sementara+str[i]
        //console.log(sementaraArr)
    }
    sementaraArr.push(sementara) //-> ngepush sisanya
    sementara='' //-> di reset biar bisa dipake sama yang awahnya
    //console.log(sementaraArr)
    var finalArr=[]
    //pisahkan lagi antara nama dengan Melee nya
    for(i=0; i<sementaraArr.length; i++){
        finalArr.push([])
        for(j=0; j<sementaraArr[i].length; j++){
            if(sementaraArr[i][j]==='-'){
                finalArr[i].push(sementara)
                sementara=''
            } else {
                sementara+=sementaraArr[i][j]
            }
        }
        finalArr[i].push(sementara)
        sementara=''
    } 
    //console.log(finalArr)
    //console.log(result)
    //lakukan looping, periksa jenis meele, jika ranged ke index [0][0], jika melee ke index [0][1]
    for (i=0; i<finalArr.length; i++){
        //result.push([])
        for (j=0; j<finalArr[i].length-1; j++){
            if(finalArr[i][1]==='Ranged'){
                result[0].push(finalArr[i][0])
            } else if (finalArr[i][1]==='Melee'){
                result[1].push(finalArr[i][1])
            }
        }
    }
    //jika tidak ada datanya sama sekali, maka kembalikan 1 return array
    if (result[0].length===0 && result[1].length===0){
        return []
    }
    return (result)
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []