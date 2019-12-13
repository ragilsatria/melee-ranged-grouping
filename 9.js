function meleeRangedGrouping (str) {
    //your code here
    if(str.length===0){
        return [];
    }
    var container = [];
    for(var i =0;i<str.length;i++){
        var tmp = "";
        while(i<str.length && str[i]!==","){
            tmp+=str[i];
            i++;
        }
        var arr =[];
        for(var j = 0;j<tmp.length;j++){
            var x =""
            while(j<tmp.length&&(tmp[j]!== "-")){
                x+=tmp[j];
                j++;
            }
            arr.push(x);
        }
        container.push(arr);
    }
    var result = [[],[]];
    for(var i =0;i<container.length;i++){
        if(container[i][1] === "Ranged"){
            result[0].push(container[i][0]);
        }
        else if(container[i][1]==="Melee"){
            result[1].push(container[i][0]);
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