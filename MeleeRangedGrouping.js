function meleeRangedGrouping (str) {
    //your code here
    var strTemp='';
    var arrHero=[];
  
    for(var i = 0; i<str.length; i++){
        if(i==str.length-1){
            strTemp+=str[i];
            arrHero.push(strTemp);
        }else if(str[i]!==","){
            strTemp+=str[i];
        }
        else{
            arrHero.push(strTemp);
            strTemp='';
        }
    }
    //console.log(arrHero);
  
    var arrTipe=[];
    var strTemp2='';

    for(var j=0; j<arrHero.length; j++){
        arrTipe.push([]);
        for(var k=0; k<arrHero[j].length; k++){
            if(arrHero[j][k]==="-"){
                arrTipe[j].push(strTemp2);
                strTemp2='';
            }else if(k==arrHero[j].length-1){
                strTemp2+=arrHero[j][k]
                arrTipe[j].push(strTemp2)
                strTemp2='';
            }else {
                strTemp2+=arrHero[j][k]
            }
        }
    }
    //console.log(arrTipe);
    
    var arrRes=[[],[]];
  
    for(a=0; a<arrTipe.length; a++){
        for(b=0; b<arrTipe[a].length; b++){
            if(arrTipe[a][b]==="Ranged"){
                arrRes[0].push(arrTipe[a][0]);
            }if(arrTipe[a][b]==="Melee"){
                arrRes[1].push(arrTipe[a][0]);
            }
        }
    }
  
    //console.log(arrRes);

    if(str.length==0){
      return []
    }
    return arrRes
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []