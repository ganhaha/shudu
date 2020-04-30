function shudu() {
    var a = []; //整个大的数组
    for (var i = 0; i < 81; i++) {
        a.push(0); //整个大数组清零
    }
    box159(a)
    return a
}
//第159大方块复制
function box159(a) {
    function set159() {

        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            var index = parseInt(Math.random() * (len - i));
            var temp = arr[index];
            arr[index] = arr[len - i - 1];
            arr[len - i - 1] = temp;
        }
        return arr;
    }
    for (var i = 0; i < 3; i++) {
        var m = 0;
        a159 = set159();
        for (var j = 0; j < 3; j++) {
            for (k = 0; k < 3; k++) {
                a[i * 30 + j * 9 + k] = a159[m];
                m++;
            }
        }
    }

}

function solveshudu(a) {
    var newArr = [];

    while (a.length > 0) {
        newArr.push(a.splice(0, 9));
    }
    // // return newArr;
    // // console.log(newArr)
    console.log('source:')
    console.table(newArr)
    // Solution(newArr)
    // var newArr = a
    var count = 0
    Solution(count)

    function Solution(count) {
        // console.log('count:', count)
        // console.table(newArr)
        // var count
        if (count > 80) {
            console.log('answer:')
            console.table(newArr)
            // return newArr
        }
        var i = parseInt(count / 9)
        var j = count % 9
        if (newArr[i][j] == 0) {

            for (var n = 1; n <= 9; n++) {
                // newArr[i][j] = n
                if (Isvalid(i, j, n) == '合法') {

                    Solution(count + 1)
                }
                // Solution(count + 1)
            }
            newArr[i][j] = 0
        } else {
            Solution(count + 1)
        }

    }


    function Isvalid(a, b, n) {
        var i = a
        var j = b
        var k = n

        for (var m = 0; m < 9; m++) {
            if (newArr[m][j] == k) {
                return '冲突'
            }


            if (newArr[i][m] == k) {
                return '冲突'
            }

        }
        // for (var m = 0; m < 9; m++) {
        //     if (i == m) {
        //         continue
        //     } else {
        //         if (newArr[i][j] == newArr[m][j]) {
        //             return '冲突'
        //         }
        //     }
        //     if (j == m) {
        //         continue
        //     } else {
        //         if (newArr[i][j] == newArr[i][m]) {
        //             return '冲突'
        //         }
        //     }

        // }
        for (var p = parseInt(i / 3) * 3; p < (parseInt(i / 3) + 1) * 3; p++) {
            for (var q = parseInt(j / 3) * 3; q < (parseInt(j / 3) + 1) * 3; q++) {

                if (newArr[p][q] == k) {
                    return '冲突'
                }


            }
        }
        // for (var p = parseInt(i / 3) * 3; p < (parseInt(i / 3) + 1) * 3; p++) {
        //     for (var q = parseInt(j / 3) * 3; q < (parseInt(j / 3) + 1) * 3; q++) {
        //         if (i == p && j == q) {
        //             continue
        //         } else {
        //             if (newArr[i][j] == newArr[p][q]) {
        //                 return '冲突'
        //             }
        //         }

        //     }
        // }
        newArr[i][j] = k
        return '合法'
    }
    // console.table(newArr)
}

console.log(solveshudu(shudu()))