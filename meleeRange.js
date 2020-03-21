function meleeRangedGrouping (str) {
    //your code here
    if(str=='')
    {
        return []
    }
    var range=[]
    var melee=[]
    var arr=[]
    var hero=''
    var temp=''
    for (var i = 0; i < str.length; i++) {
        if(str[i]=='-')
        {
            for (var j = i; j < str.length; j++) {
                if(str[j]==',')
                {
                    break
                }
                else {
                    if(str[j+1]==','||str[j+1]==undefined)
                    {
                        i=j+1
                        break
                    }
                    else{
                    temp+=str[j+1]
                    }
                }  
            }
        }
        else {
            hero+=str[i]
        }
        if(temp=='Ranged')
        {
            range.push(hero)
            hero=''
            temp=''
        }
        if(temp=='Melee')
        {
            melee.push(hero)
            temp=''
            hero=''
        }
    }
    arr.push(range)
    arr.push(melee)
    return arr
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []