// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

// Jika input adalah string kosong ('') maka return array kosong


function meleeRangedGrouping (str) {
    var test = str.split('-')
    var string = test.toString()
    var split = string.split(',')
    
    var area =[]

    var melle =[]
    var range =[]
    for(var i=0; i<split.length; i++){
        if(split[i+1] === 'Ranged'){
            range.push(split[i])
        }else if(split[i+1] === 'Melee'){
            melle.push(split[i])
        }
    }
    area.push(range)
    area.push(melle)
    var obj = {}
    obj['Ranged'] = range
    obj['melee'] = melle

    if(str.length===0){
        return []
    }
        return obj
}
    
    // TEST CASE
    
    console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
    // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

    console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
    // [ ['Drow Ranger', 'Chen', ''Dazzle', 'Io'], [] ]

    console.log(meleeRangedGrouping('')); // []