// Claudio Antonius

function meleeRangedGrouping (str) {
    //your code here
    // let result = [];
    // if (str.length !== 0) {
    //     let arr = str.split(',');
    //     let ranged = [];
    //     let melee = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         let temp = arr[i].split('-');
    //         if (temp[1] === 'Ranged')
    //             ranged.push(temp[0]);
    //         else 
    //             melee.push(temp[0]);
    //     }
    //     result.push(ranged);
    //     result.push(melee);
    // }
    // return result;

    // tanpa split
    let tempHero = '';
    let cond = true;
    let tempClass = '';
    let arrMelee = [];
    let arrRanged = [];
    let result = [];
    if (str.length !== 0) {
        for (let i = 0; i <= str.length; i++) {
            if (str[i] === '-'){
                cond = false;
            } else if (str[i] === ',' || i === str.length) {
                if (tempClass === 'Melee') {
                    arrMelee.push(tempHero);
                    tempHero = '';
                    tempClass = '';
                } else {
                    arrRanged.push(tempHero);
                    tempHero = ''; 
                    tempClass = '';
                }
                cond = true;
            } else if (cond === true) {
                tempHero += str[i];
            } else if (cond === false) {
                tempClass += str[i];
            } 
        }
        result.push(arrRanged);
        result.push(arrMelee);
    }
    return result;

    // OBJECT
    // let tempHero = '';
    // let tempType = '';
    // let cond = true;
    // let obj = {};

    // for (let i = 0; i <= str.length; i++) {
    //     if (str[i] === '-') {
    //         cond = false;
    //     } else if (str[i] === ',' || i === str.length) {
    //         if (obj[tempType] == null) 
    //             obj[tempType] = [tempHero];
    //         else obj[tempType].push(tempHero);
    //         tempType = '';
    //         tempHero = '';
    //         cond = true;
    //     } else if (cond === true) {
    //         tempHero += str[i];
    //     } else if (cond === false) {
    //         tempType += str[i];
    //     }
    // }

    // return Object.values(obj);
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []