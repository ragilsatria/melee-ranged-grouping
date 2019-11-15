function meleeRangedGrouping (str) {
    //your code here
    if(str.length === 0){
        return []
    }
    var input1 = str.split(',')
    var arr = []
    for(var x = 0; x < input1.length; x++){
        var ar = []
        ar.push(input1[x])
        arr.push(ar)               
    }
    
    var arr1 = []
    for(var a = 0; a < arr.length; a++){
        var ar = []
         var temp = ''
        for(var b = 0; b < arr[a][0].length; b++){
            // console.log(arr[a][b])
            if(temp.length === 0){
                temp = arr[a][0][b]
                // console.log(arr[a][b])
            }else{
                if(arr[a][0][b] != '-'){
                    temp = temp + arr[a][0][b]
                    
                    if(b+1 === arr[a][0].length){
                        ar.push(temp)
                        temp = ''
                    }
                } else if(arr[a][0][b] === '-'){
                    ar.push(temp)
                    temp = ''
                }
            }
            
        }
        arr1.push(ar)
    }
    
    var hasil = []
    var kumpul = []
    var kumpul2 = []
    for(var a = 0; a < arr1.length; a++){
        if(arr1[0][1] === arr1[a][1] ){
            kumpul.push(arr1[a][0])
            // hasil.push(kumpul)
        } else{
            kumpul2.push(arr1[a][0])
            // hasil.push(kumpul)
        }
    }
    hasil.push(kumpul)
    hasil.push(kumpul2)
    return hasil
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []


