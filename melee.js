function meleeRangedGrouping (str) {
    if(str === ''){
        return []
    }
    var result = []
    var gabung =''
    for(var i=0; i<str.length; i++){
        if(str[i] === ','){
            result.push(gabung)
            gabung = ''
            
        }else{
            gabung += str[i]  
        }
        if(str.length-1 === i){
            result.push(gabung)
        }
        
    }
    //console.log(result)
    var tampung2 = ''
    var a =[]
    for(var j=0; j<result.length; j++){
        a.push([])
        for(var k=0; k<result[j].length; k++){
            if(result[j][k]=== '-'){
                a[j].push(tampung2)
                tampung2 =''
                
            }else{
                tampung2 += result[j][k]                
            }
            if(result[j].length-1 === k){
                a[j].push(tampung2)
                tampung2 =''
                
            }

        }
    }
    //console.log(a)

    var b =[[],[]];
    for(var l=0; l<a.length; l++){
        if(a[l][1] === 'Ranged'){
            b[0].push(a[l][0])
        }else if(a[l][1] === 'Melee'){
            b[1].push(a[l][0])
        }
     
    }

    return b
}


  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []