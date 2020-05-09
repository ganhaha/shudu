//草稿 无用
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
// var a = [
//     8, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 3, 6, 0, 0, 0, 0, 0,
//     0, 7, 0, 0, 9, 0, 2, 0, 0,
//     0, 5, 0, 0, 0, 7, 0, 0, 0,
//     0, 0, 0, 0, 4, 5, 7, 0, 0,
//     0, 0, 0, 1, 0, 0, 0, 3, 0,
//     0, 0, 1, 0, 0, 0, 0, 6, 8,
//     0, 0, 8, 5, 0, 0, 0, 1, 0,
//     0, 9, 0, 0, 0, 0, 4, 0, 0
// ]

function solveshudu(a) {
    var newArr = [];

    while (a.length > 0) {
        newArr.push(a.splice(0, 9));
    }

    var count = 0
    var findflag = false
    Solution(count, findflag)

    function Solution(count, findflag) {


        if (count === 81) {

            shuduAnsw(newArr)
            return
          

        }
        
        var i = parseInt(count / 9)
        var j = count % 9
        if(i===9){return}
        if (newArr[i][j] === 0) {

            for (var n = 1; n <= 9; n++) {

                if (Isvalid(i, j, n) === '合法') {

                    newArr[i][j] = n
                    
                    Solution(count + 1, findflag)

                }
            }
            newArr[i][j] = 0

        } else {
            
            Solution(count + 1, findflag)

        }

    }

    function Isvalid(a, b, n) {
        var i = a
        var j = b
        var k = n

        for (var m = 0; m < 9; m++) {
            if (newArr[m][j] === k) {
                return '冲突'
            }


            if (newArr[i][m] === k) {
                return '冲突'
            }

        }
    
        for (var p = parseInt(i / 3) * 3; p < (parseInt(i / 3) + 1) * 3; p++) {
            for (var q = parseInt(j / 3) * 3; q < (parseInt(j / 3) + 1) * 3; q++) {

                if (newArr[p][q] === k) {
                    return '冲突'
                }


            }
        }

        return '合法'
    }
  

    function shuduAnsw(newArr){
                console.table(newArr)
                
    }

}
solveshudu(shudu())
// console.log(solveshudu(shudu()))
// solveshudu(shudu())