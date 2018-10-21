function meleeRangedGrouping (str) {
 var split= str.split(",")
 let hasil = [   [],[]   ]
 

 for(var i=0; i< split.length;i++){
   var akhir=split[i].split("-")
   if(akhir[1]==="Ranged"){
     hasil[0].push(akhir[0])
   } else{
     hasil[1].push(akhir[0])
   }
   if(str.length==0){
     return "[]"
   }

 }

//  console.log(akhir)
 return hasil
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []