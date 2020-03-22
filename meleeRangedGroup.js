function meleeRangedGrouping(str) {
    var ranged = [];
    var melee = [];
    var strArray = ''
    var arrayNameClass = [];
    var arraySplit = [];
    var res = [];
    var tampung = []
    //your code here
    // //looping string
    if(str.length>0){
        for (var i = 0; i < str.length; i++) {
            //push masing" nama dan class ke array terpisah 
            if (str[i] !== ',') {
                strArray += str[i]
            } else if (str[i] == ',') {
                arrayNameClass.push(strArray);
                strArray = '';
            }
            if (arrayNameClass.length >= 3) {
                tampung.push(strArray)
            }
        }
        arrayNameClass.push(tampung[tampung.length - 1])
        // return arrayNameClass
        //split lagi array ke dalam array 
    
        for (var j = 0; j < arrayNameClass.length; j++) {
            var strName = '';
            var temp = []
            // console.log(arrayNameClass[j])
            for (var k = 0; k <arrayNameClass[j].length; k++) {
                if (arrayNameClass[j][k] !== '-') {
                    strName += arrayNameClass[j][k]
                } else {
                    temp.push(strName);
                    strName = '';
                }
            }
            temp.push(strName);
            arraySplit.push(temp);
        }
        // console.log(arraySplit) 
        // console.log(arraySplit[0][1])
        
        //looping array split
            for(var l=0;l<arraySplit.length;l++){
                if(arraySplit[l][1] == 'Ranged'){
                    ranged.push(arraySplit[l][0])
                }else if(arraySplit[l][1] == 'Melee'){
                    melee.push(arraySplit[l][0])
                }
            }
            res.push(ranged,melee)
            return res;

    }else{
        return res;
    }

}
// return arraySplit;
// //looping array split
// for(var m=0;m<arraySplit.length;m++){
//     if(arraySplit[m][1]== 'Ranged')
// }



// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
[ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []