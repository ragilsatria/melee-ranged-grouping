function meleeRangedGrouping (str) {
    //your code here
    var kasih = [], temp = '', res = [[],[]];
    for(var i=0; i<=str.length; i++){
        if(str[i] === ',' || str[i] === '-' || i === str.length){
            kasih.push(temp);
            temp = '';
        }
        else
            temp += str[i];
    }
    for(i=0; i<kasih.length; i+=2){
        if(kasih[i+1] === 'Ranged')
            res[0].push(kasih[i]);
        else if(kasih[i+1] === 'Melee')
            res[1].push(kasih[i]);
    }
    return !str.length ? [] : res;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []