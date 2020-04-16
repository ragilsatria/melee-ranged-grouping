function meleeRangedGrouping (str) {
    //your code here
    var arrStr = [];
    var flag = false;
    var temp = '';
    var result = [];
    var ranged = [];
    var melee = [];

    for(var i = 0; i < str.length; i++){
        
        if(str[i] == ',' || str[i] == '-')flag = true;
        if(flag == false)temp += str[i];
        if(flag == true || i >= str.length-1) arrStr.push(temp), temp = '', flag = false;
    }

    for(var i = 0; i < arrStr.length; i++){
        if(arrStr[i+1] == 'Ranged') ranged.push(arrStr[i]);
        else if(arrStr[i+1] == 'Melee') melee.push(arrStr[i]); 
        if(i >= arrStr.length-1){
            result.push(ranged);
            result.push(melee);
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