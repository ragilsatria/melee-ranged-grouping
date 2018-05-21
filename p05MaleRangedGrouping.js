function meleeRangedGrouping (str) {
    //your code here
        if(str.length < 1){
            return ''
        }else {
    var pisahkoma = str.split(',')
    var arrpisahdash = []
    for(var i = 0; i < pisahkoma.length; i++){
        pisahdash = pisahkoma[i].split('-')
        arrpisahdash.push(pisahdash)
        pisahdash = ''
    }
    

    var arrmelee = [] 
    var arrranged = []
    var induk = []
    for(var i = 0; i < arrpisahdash.length; i++){
        for(var j = 0; j < arrpisahdash[i].length; j++){
           if(arrpisahdash[i][j] === 'Ranged'){
               arrranged.push(arrpisahdash[i][0])
           } else if(arrpisahdash[i][j] === 'Melee'){
               arrmelee.push(arrpisahdash[i][0])
           }
        }
    }

    induk.push(arrranged)    
    induk.push(arrmelee)
    return induk
    }
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []