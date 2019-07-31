/**
 * Function takes in a string containing information about which player belongs to which group
 * Function returns an array inside an array, each array inside contains player names of the same group
 * 
 * @param {*} str String
 */
function meleeRangedGrouping (str) {
    if (str === ""){
        return [];
    }
    var players = str.split(',');
    var rangedPlayers = [];
    var meleePlayers = [];

    for (let i = 0; i < players.length; i++) {
        var pair = players[i].split('-');
        if (pair[1] === "Ranged"){
            rangedPlayers.push(pair[0]);
        }
        if (pair[1] === "Melee"){
            meleePlayers.push(pair[0]);
        }
    }
    var bothGroups = [];
    bothGroups.push(rangedPlayers, meleePlayers);
    return JSON.stringify(bothGroups,null,2);
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []