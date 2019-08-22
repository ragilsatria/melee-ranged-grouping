// Melee Ranged Grouping
function meleeRangedGrouping (str) {
	// Membuat sebuah array kosong yang didalamnya terdapat dua array kosong
	// Karena sudah dipastikan bahwa hanya ada dua grup yang tersedia
	var output = [[],[]];

	// Melakukan split() agar lebih mudah untuk pengenlompokkan
	var arr = str.split(',')

	// Memulai pengelompokkan dengan looping,
	// ketika ada string yang masuk kedalam perulangan,
	// akan dicek apa classnya, dan dikelompokkan kedalam class
	// yang sesuai 
	for(var i = 0; i < arr.length; i++){
		if(arr[i].indexOf('Ranged') != -1){
			// Karena 'Ranged' memiliki 6 huruf, untuk menghilangkan kata 'Ranged',
			// disubstring sampai dengan length -7
			output[0].push(arr[i].substring(0,arr[i].length-7))
		}
		else if(arr[i].indexOf('Melee') != -1){
			// Karena 'Melee' memiliki 5 huruf, untuk menghilangkan kata 'Melee',
			// disubstring sampai dengan length -6
			output[1].push(arr[i].substring(0,arr[i].length-6))
		}
	}

	// Ketika data yang masuk adalah string kosong, 
	// maka langsung di return array kosong
	if(str == ''){
		return [];
	}
	return output;
}

// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []