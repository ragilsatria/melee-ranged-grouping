
function splitHero(str){
    let res = []
    sep ='-'
    let kata=''
    for (let i =0 ; i < str.length; i ++){

        // console.log(i, str.length-1)
        if (str[i]!==sep){
            kata+=str[i]
        } if (str[i]===sep){
            res.push(kata)
            kata=''
        } if (i === str.length-1 ){
            res.push(kata)
        }
    }
    return res
}
// console.log(splitHero('Razor-Ranged', '-'))

function splitData (str){
    res = []
    sep=','
    kata=''
    for (let i = 0; i < str.length; i ++){
        if (str[i]!==sep){
            kata+=str[i]
        } if (str[i]===sep){
            res.push([kata])
            kata=''
        } if (i === str.length-1){
            res.push([kata])
        }
    }
    return res
}
// console.log(splitData('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged',','));

function meleeRangedGrouping (str) {
  //your code here
    if (str.length<=0){
        return []
    }

    let res = [[],[]]
    let input = splitData(str)
 
    for (let i = 0; i < input.length; i ++){
        let namaHero = splitHero(input[i][0])[0]
        let tipeHero = splitHero(input[i][0])[1]
       
        if (tipeHero=='Melee'){
            res[1].push(namaHero)
        }
        if (tipeHero=='Ranged'){
            res[0].push(namaHero)
        }
    }
    return res

}

// // TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []