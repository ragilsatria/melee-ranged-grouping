function meleeRangedGrouping (str) {
    //your code here
    var hasil=[]
    var tampung=[]
    var kata=""
    for(i=0; i<str.length; i++){
    if(str[i]==","||str[i]=="-"){
        tampung.push(kata)
        kata=""
    }
    else{kata+=str[i]}
}
tampung.push(kata)
for(k=0; k<2; k++){
    hasil.push([])
}
console.log(hasil)
for(j=0; j<tampung.length; j++){
    if(tampung[j]=="Ranged"){
        hasil[0].push(tampung[j-1])
    }
    else if(tampung[j]=="Melee"){
        hasil[1].push(tampung[j-1])
    }
}
if(str.length===0){
    return []
}
    return hasil
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []