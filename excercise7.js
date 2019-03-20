function meleeRangedGrouping(str){
    var output = [[],[]]
    var heroes = str.split(",")
    if (str === "" || str === " ")return [];
    for (var i=0; i<heroes.length ; i++){
        var heroesSplit = heroes[i].split("-")
        if(heroes[i].includes("Ranged")){
            output[0].push(heroesSplit[0])
            // console.log("sukses")
        }else if(heroes[i].includes("Melee")){
            output[1].push(heroesSplit[0])
        }
    }return output
}
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'))
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
console.log(meleeRangedGrouping(" "))

if(0){
    console.log("true")
}else{
    console.log("false")
}