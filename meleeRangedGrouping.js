function reverseWord(word){
    let output = ''
    for(a=word.length-1;a>=0;a--){
        output += word[a]
    }
    return output
}

function grouping(str, type){
    let group = []
    for(i=0;i<str.length;i++){
        let selectedHero = ''
        for(j=i;j<type.length+i;j++){
            selectedHero += str[j]
        }
        if(selectedHero===type){
            let hero = ''
            for(k=i-2;k>=0;k--){
                if(str[k]===','){
                    break
                }
                hero += str[k]
            }
            group.push(reverseWord(hero))
        }
    }
    return group;
}

function meleeRangedGrouping (str) {
  //your code here
  let meleeGroup = grouping(str, 'Melee')
  let rangedGroup = grouping(str, 'Ranged')

  if(meleeGroup.length===0 && rangedGroup.length===0){
    return []
  }else{
    return [rangedGroup, meleeGroup]
  }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []