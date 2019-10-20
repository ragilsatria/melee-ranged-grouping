const meleeRangedGrouping = (str) => {
    //your code here
    if (str.length === 0) {
      return []
    }
    let temp = "";
    let arr = [];
    const multiArr = [];
    for (let i = 0; i < str.length; i++) {
      let checkWord = true;
      if (str[i] === "," || str[i] === "-") {
        checkWord = false;
      }
      if (checkWord === true) {
        temp += str[i]
      }
      if (str[i] === "," || str[i] === "-" || i === str.length-1) {
        arr.push(temp);
        multiArr.push(arr);
        temp = "";
        arr = [];
      }
    }
    arr.push(temp);
    multiArr.push(arr);
    // console.log(multiArr)
    const ranged = [];
    const mele = [];
    const hasil = [];
    for (let i = 0; i < multiArr.length; i++) {
      if (multiArr[i][0] === "Ranged") {
        ranged.push(multiArr[i-1][0])
      } else if (multiArr[i][0] === "Melee") {
        mele.push(multiArr[i-1][0])
      }
    }
    hasil.push(ranged, mele);
    return hasil
  }
  
  // TEST CASE
  
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
    // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
    // // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
console.log(meleeRangedGrouping('')); // []