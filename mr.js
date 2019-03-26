function meleeRangedGrouping (str) {
    //your code here
    if(str===''){
        return [];
    }
    var b='';
    var arr=[];
    for (var i=0;i<str.length;i++){
        var a=false;
        if(str[i]!=='-'){
            if(str[i]!==','){
                b+=str[i];
                a=true;
            }
        }
        if(a===false || i==str.length-1){
            arr.push(b);
            b='';
        }
    }
    var hasil=[[],[]];
    for (var i=1;i<arr.length;i++){
        if (arr[i]==='Ranged'){
            hasil[0].push(arr[i-1]);
        }
        if (arr[i]==='Melee'){
            hasil[1].push(arr[i-1]);
        }
    }
    return hasil;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []