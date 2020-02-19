//Logic Challenge: Melee Ranged Grouping

function meleeRangedGrouping (str) {
    //your code here
    if(str == '') {
        return [];
    }

    // PISAKAN BY COMA
    let result = [];
    let namaGrup = []
    let temp = '';
    for(i = 0; i < str.length; i++) {
        if(str[i] == ',') {
            namaGrup.push(temp);
            temp = '';
        }
        else {
            temp += str[i];
        }
    }
    namaGrup.push(temp);
    // console.log(namaGrup)

    // PISAHKAN BY STRIP
    let namaGrup2 = [];
    let temp2 = '';
    for(i = 0; i < namaGrup.length; i++)  {
        for(j = 0; j < namaGrup[i].length; j++) {
            if(namaGrup[i][j] == '-' || namaGrup[i][j] == ',') {
                namaGrup2.push(temp2);
                temp2 = '';
            }
            else {
                temp2 += namaGrup[i][j];
            }
        }
        namaGrup2.push(temp2);
        temp2 = '';
    }
    // console.log(namaGrup2);

    // MASUKAN NAMA DAN KATEGORI KE SATU ARRAY
    let kelompok = [];
    for(i = 0; i < namaGrup2.length; i+=2) {
        kelompok.push(namaGrup2[i], namaGrup2[i+1]);
        result.push(kelompok);
        kelompok = [];
    }
    // console.log(result)

    // KELOMPOKKAN NAMA DENGAN KATEGORI YANG SAMA DALAM SATU ARRAY
    let ranged = [];
    let melee = [];
    for(i = 0; i < result.length; i++) {
        if(result[i][1] == 'Ranged' ) {
            ranged.push(result[i][0]);
        }
        else {
            melee.push(result[i][0]);
        }
    }

    // BUAT HASIL
    let hasil = [];
    hasil.push(ranged, melee);
    return hasil;
}

// let hero="RazorInvokerMeepo";
// let class="RangedRangerdMelee"

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []