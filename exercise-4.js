function meleeRangedGrouping (str) {
    var pisah = []
    var hasil = []
    var ranged = []
    var melee = []
    temp = ''

    if(str.length === 0){
        return hasil 
    }

    else{
        for(var i=0;i<str.length;i++){
            if(str[i] === ',' || i === str.length-1){
                pisah.push(temp)
                temp = ''
            }
            else{
                temp += str[i]
            }
        }

        for(var i=0;i<pisah.length;i++){
            for(var j=0;j<pisah[i].length;j++){
                if(pisah[i][j] === '-' && pisah[i][j+1] === 'R'){
                    var tamp = ''
                    for(var k=0;k<j;k++){
                        tamp += pisah[i][k]
                    }
                    ranged.push(tamp)
                }
            
                if(pisah[i][j] === '-' && pisah[i][j+1] === 'M'){
                    var tamp = ''
                    for(var k=0;k<j;k++){
                        tamp += pisah[i][k]
                    }
                    melee.push(tamp)
                }
            }
        }
        hasil.push(ranged,melee)
        return hasil
    }

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []