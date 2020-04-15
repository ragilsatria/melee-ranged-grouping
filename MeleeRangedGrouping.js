/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, 
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong

*/



function meleeRangedGrouping (str) {
    //your code here
   var arr = []
   var newStr = ''
  
  
   //memecah string menjadi perkata
   for(var i=0; i<=str.length; i++){
       if(str[i] != ','){
           newStr += str[i]
       
      if(i == str.length-1)
          arr.push(newStr)
       
      }else{
           arr.push(newStr)
           newStr = ''
       }
  }
  
  //memceha kata berdasarakan strip
  var final = []
  var arr2 = []
  var newStr1 = ''
  
  for(var j=0; j<arr.length; j++){
      arr2=[]
      newStr1 = ''
      for(var k=0; k<arr[j].length; k++){
          if(arr[j][k] != '-' ){
              newStr1 += arr[j][k]
  
          if(k == arr[j].length-1){
              arr2.push(newStr1)
          }
              
          }else{
              arr2.push(newStr1)
              newStr1 = ''
          }
      }
      //console.log(arr2)
     final.push(arr2)
  }
  
  //console.log(final)
  
  var hasilFinal = []  
  var ranged = []
  var melee = []
    
  for(var l=0; l<final.length; l++){
    var hasil = []
    for(var m=0; m<final[l].length; m++){
  
      if(final[l][m] ==  'Ranged'){
            ranged.push(final[l][0])
            
      }
      if(final[l][m] == 'Melee'){
          melee.push(final[l][0])
           
      }
     
      
    }
  
   hasil.push(ranged)
   hasil.push(melee)
  
  }
  //console.log(hasil)
    //console.log(melee)
    //ranged = []
    //melee = []
  if(arr == ''){
      return []
  }  else{
  return hasil
}
  }
  
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []