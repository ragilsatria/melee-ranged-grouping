function meleeRangedGrouping (str) {
    if(str == "") return [];
    let out = [[],[]];
    let heroes = str.split(",");
    
    for(let i=0; i<heroes.length; i++){
        let name = heroes[i].split("-")[0];
        let type = heroes[i].split("-")[1];  //returns "Ranged" or "Melee"
        (type==="Ranged")?
            out[0].push(name) : out[1].push(name);
    }
    return out;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []