function meleeRangedGrouping(str){
    // [[ranged],[melee]]
    var arr=[]
    var temp = ''
    for(let i = 0; i <= str.length; i++){
        if(str[i] === '-' || str[i] === ',' || i === str.length){
            arr.push(temp)
            temp=''
        }
        else{
            temp+=str[i]
        }
    }
    // console.log(arr)
    var hasil = [ [], [] ]
    for(let i = 0; i < arr.length; i++){
        if(i%2===1){
            if(arr[i] === 'Ranged'){
                hasil[0].push(arr[i-1])
            }else{
                hasil[1].push(arr[i-1])
            }
        }
    }
    if(str.length===0){
        return []
    }
    return hasil
}

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []