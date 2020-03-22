function meleeRangedGrouping (str) {
    //your code here
    
    hero = ''
    ranged = []
    melee = []
    heroes = []
    
    //cek jika hero 0
    if(str.length < 1){
        return heroes
    }
    
    //cek ranged melee
        for(i=0; i<str.length; i++){
        if(str[i] !== '-'){
            hero += str[i]
            
        } else if(str[i] == '-' && str[i+1] == 'R'){
            ranged.push(hero)
            i+=7
            hero = ''
        }  else if(str[i] == '-' && str[i+1] == 'M'){
            melee.push(hero)
            i+=6
            hero = ''
        }   
  }
  //push ranged melee
  heroes.push(ranged)
  heroes.push(melee)
  return heroes
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []