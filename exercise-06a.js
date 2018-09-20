function meleeRangedGrouping(str) {
    //your code here
    if(str === ''){
        return '[]'
    }
    var arr = str.split(',') //Pecah str jadi string
    var arr2 = [] //Untuk menampung arr yang sudah dipecah 
    var ranged = []
    var melee = []
    var hero = []

    //Pecah nama hero dan tipe menjadi satu array
    for(var i = 0; i<arr.length; i++){
        var pecahHero = arr[i].split('-')
        arr2.push(pecahHero)
    }
    // return arr
    // return arr2

    //Posisi arr2
    for(var j = 0; j<arr2.length; j++){
        //Posisi hero
        for(var k = 0; k<arr2[j].length; k++){
            if(arr2[j][k] === 'Ranged'){
                ranged.push(arr2[j][k-1])
            }else if(arr2[j][k] === 'Melee'){
                melee.push(arr2[j][k-1])
            }
        }
    }
    hero.push(ranged)
    hero.push(melee)

    return hero

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []