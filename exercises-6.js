function meleeRangedGrouping (str) {
   var result = [ [], [] ];
   var heroes =  str.split(',');
   
   for(var a = 0; a < heroes.length; a++ ){
    var heroesSplit = heroes[a].split('-');
        if( "Ranged" === heroesSplit[1]){
            result[0].push(heroesSplit[0]);
        }
        else{
            result[1].push(heroesSplit[0])
        }
    
   }

   return result;
  
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []