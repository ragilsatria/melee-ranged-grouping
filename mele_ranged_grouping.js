function meleeRangedGrouping(str){
  var melee = [];
  var ranged = [];
  var result = [];
  var splitted = str.split(','); 
  if(str.length == 0){
      return [];
  }
  for(i=0; i<splitted.length; i++){
      counterDash = 0;
    //   console.log(splitted[i])
    for(j=0; j<splitted[i].length; j++){
        if(counterDash > 0){
            if(splitted[i][j] === 'R'){
                var temp = '';
                for(k=0; k<splitted[i].length; k++){
                    if(splitted[i][k] === '-'){
                        break;
                    }
                    temp += splitted[i][k];    
                }
                // console.log(temp);

                ranged.push(temp)

            }
            if(splitted[i][j] === 'M'){
                var temp = '';
                for(k=0; k<splitted[i].length; k++){
                    if(splitted[i][k] === '-'){
                        break;
                    }
                    temp += splitted[i][k];
                }
                melee.push(temp)
            }
        }else if(splitted[i][j] === '-'){
            counterDash++;
        }
        
    }  

  }
  result.push(ranged);
  result.push(melee);
return result;
//   console.log(result);

}
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []