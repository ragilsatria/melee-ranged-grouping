function meleeRangedGrouping (str) {
    //your code here
    if(str==='')
        return [];

    var split_heroes=str.split(',');
    var result=[[],[]];

    for(var i=0;i<split_heroes.length;i++){
        var hero=split_heroes[i];
        var hehe=hero.split('-');
        switch(hehe[1]){
            case 'Ranged':
                result[0].push(hehe[0]);
            break;
            case 'Melee':
                result[1].push(hehe[0]);
            break;
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