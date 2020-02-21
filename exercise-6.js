function meleeRangedGrouping (str) {
  //your code here
    var hasil=splitter(str)
    var result=[[],[]]

    for(var i=0;i<hasil.length;i++){
        var temp=''
        var temp1=''
        for(var j=0;j<hasil[i].length;j++){
            if(hasil[i][j]!='-'){
                temp+=hasil[i][j]
            }
            else if(hasil[i][j]=='-'){
                temp1=temp
                temp=''
            }
            // console.log(temp)
            if(j==hasil[i].length-1){
                if(temp=='Ranged'){
                    result[0].push(temp1)
                }
                else if(temp=='Melee'){
                    result[1].push(temp1)

                }
            }
        }
    }
    return result
}

function splitter(str){
    var result=[]
    var temp=''

    for(var i=0;i<str.length;i++){
        if(str[i]!=','){
            temp+=str[i]
        }
        else if(str[i]==','){
            result.push(temp)
            temp=''
        }
        if(i==str.length-1){
            result.push(temp)
            temp=''
            
        }
        // console.log(temp)

    }
    return result
}
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []

// function checkNilai(tugas, lc1, lc2, lc3){
//     var tugas = tugas * 0.45
//     var lc1 = lc1 *0.15
//     var lc2 = lc2 *0.2
//     var lc3 = lc3 *0.2
    
//     return tugas + lc1 + lc2 + lc3
// }

// console.log(checkNilai(100, 46, 100, 100))