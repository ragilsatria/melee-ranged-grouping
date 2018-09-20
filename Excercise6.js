//Logic Challenge Melee Ranged Grouping

function meleeRangedGrouping(str) {

  //Step 1. split the input so that we can view the class per user
  var users = []
  var split_input = str.split(',')//to split the input to show per player and its class

  //to loop each player and class created by split
  for (var i = 0; i<split_input.length; i++) {
    var split_indiv = split_input[i].split('-') //to the user name and class and push it to 'users'
    users.push(split_indiv)
  }

  //Step 2. categorize the output based on the class of the players
  var output = [
    [],
    []
  ]
  //to loop each data in 'users'
  for (var j = 0; j<users.length; j++) {
    if (users[j][1] === 'Ranged') {
      output[0].push(users[j][0])

    } else if (users[j][1] === 'Melee') {
      output[1].push(users[j][0])

      //to return empty array if the input is blank
    } else if (!str.length) {
      output = []
    }
  }
  return output
}

//TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
 //[ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  //[ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping(''));  //[]