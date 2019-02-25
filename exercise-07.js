function meleeRangedGrouping (str) {
  //your code here
  let groupArr = [[], []];
  let keyword1 = "Ranged";
  let keyword2 = "Melee"; // Not used

  let splitArr = [];

  if (str.length === 0) {
    return [];
  }

  // str.split(",")
  let eachStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ",") {
      eachStr += str[i];
    } else {
      splitArr.push(eachStr);
      eachStr = "";
    }
  }
  splitArr.push(eachStr);

  // console.log(splitArr);

  // Group names that has keyword1
  for (let i = 0; i < splitArr.length; i++) {
    // console.log(splitArr[i].length);
    // console.log(splitArr[i].length - keyword1.length);

    let tempStr = "";

    for (let j = splitArr[i].length - keyword1.length; j < splitArr[i].length; j++) {
      tempStr += splitArr[i][j];
    }

    // console.log(tempStr);
    if (tempStr === keyword1) {
      groupArr[0].push(splitArr[i]);
    } else {
      groupArr[1].push(splitArr[i]);
    }
  }

  // console.log(groupArr);

  // Display names only
  for (let i = 0; i < groupArr.length; i++) {
    for (let j = 0; j < groupArr[i].length; j++) {
      let tempStr = "";

      let counter = 0;
      let isHyphen = false;

      while (!isHyphen) {
        // console.log(groupArr[i][j][counter]);
        tempStr += groupArr[i][j][counter];

        counter++;

        if (groupArr[i][j][counter] === "-") {
          isHyphen = true;
        }
      }

      // console.log(tempStr);
      groupArr[i][j] = tempStr;
    }
  }
  
  return groupArr;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []