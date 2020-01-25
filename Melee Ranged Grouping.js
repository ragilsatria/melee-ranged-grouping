function meleeRangedGrouping(str){
  //jika str kosong
  if(str.length===0){
    return [];
  }
  let heroes = [];
  //split berdasarkan koma,
  let temp= "";
  for(let i=0;i<str.length;i++){
    if(str[i]===","){
        heroes.push(temp);
        temp="";
    }
    else{
        temp+=str[i];
    }
  }heroes.push(temp);
    //split berdasarkan jenis heroes
  let temp2=[];
  let hero_type = [];
  let tempStr = ""
  for(let i=0;i<heroes.length;i++){
    for(let j=0;j<=heroes[i].length;j++){
        if(heroes[i][j]==="-"){
            temp2.push(tempStr);
            tempStr="";
         }
         else if(j===heroes[i].length){
            temp2.push(tempStr);
            tempStr="";
        } 
         else{
             tempStr+=heroes[i][j];
         } 
    }
    hero_type.push(temp2);
    temp2=[];
  }
    //split berdasarkan jenis heroes
    let melee = [];
    let ranged = [];
    for(let i=0;i<hero_type.length;i++){
        for(let j=1;j<hero_type[i].length;j++){
            if(hero_type[i][j]==="Ranged"){
                ranged.push(hero_type[i]);
            }
            else if(hero_type[i][j]==="Melee"){
                melee.push(hero_type[i]);
            }
        }
    }
    //hasil akhir
    //adding ranged
    let result =[];
    let temp3=[];
    for(let i=0;i<ranged.length;i++){
        for(let j=0;j<ranged[i].length-1;j++){
            temp3.push(ranged[i][j]);
        }
    }result.push(temp3);
    temp3=[];

    //adding melle
    for(let i=0;i<melee.length;i++){
        for(let j=0;j<melee[i].length-1;j++){
            temp3.push(melee[i][j]);
        }
    }result.push(temp3);

    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], 
//     [ <daftar_hero_dengan_tipe_melee> ] ]