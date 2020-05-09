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
// var a = [
//     1, 0, 0, 8, 3, 0, 0, 0, 2,
//     5, 7, 0, 0, 0, 1, 0, 0, 0,
//     0, 0, 0, 5, 0, 9, 0, 6, 4,
//     7, 0, 4, 0, 0, 0, 5, 9, 0,
//     0, 0, 3, 0, 1, 0, 4, 0, 0,
//     0, 5, 1, 4, 0, 0, 3, 0, 6,
//     3, 6, 0, 7, 0, 4, 0, 0, 0,
//     0, 0, 0, 6, 0, 0, 0, 7, 9,
//     8, 0, 0, 0, 5, 2, 0, 0, 3
// ]
//生成数独方阵
function solveshudu(a) {
    var i, j, n
    var newArr = [] //一维数独二维化后的新矩阵
    var stackindexi = [] //存放新矩阵行标，回溯用
    var stackindexj = [] //存放新矩阵列标，回溯用
    var stackanwer = [] //存放新矩阵答案，回溯用

    while (a.length > 0) {
        newArr.push(a.splice(0, 9));
    } //一维数独二维化

    for (i = 0; i < 9; i++) {
        innerfor: for (j = 0; j < 9; j++) {
            if (newArr[i][j] === 0) {
                for (n = 1; n <= 9; n++) {
                    if (Isvalid(i, j, n) === '合法') {
                        newArr[i][j] = n
                        stackindexi.push(i)
                        stackindexj.push(j)
                        stackanwer.push(n)
                        continue innerfor //当获得答案时继续循环测试下一个单元格
                    }
                }
                //无法获得答案时回溯
                newArr[i][j] = 0
                while (stackanwer.length > 0) {
                    i = stackindexi.pop()
                    j = stackindexj.pop()
                    for (n = stackanwer.pop(); n <= 9; n++) {
                        if (Isvalid(i, j, n) === '合法') {
                            newArr[i][j] = n
                            stackindexi.push(i)
                            stackindexj.push(j)
                            stackanwer.push(n)
                            continue innerfor
                        }
                    }
                    newArr[i][j] = 0
                }


            } else { //如果矩阵原有数字则继续下一个测试
                continue innerfor
            }
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


    return newArr
}


//先随机生成1，5，9宫方格，因为这三宫不会冲突，然后暴力测试，生成数独方阵
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

//挖空生成数独题
function makeshudu(a) {
   
    
    for (var i = 0; i < 30; i++) { //循环次数就是空格数。感觉到30个空格是唯一解的极限！
        var k = Math.floor(Math.random() * 81)
        while (a[k] == 0) {
            k = Math.floor(Math.random() * 81)
        }
        a[k] = 0
    }
    return a
}
var initshudu=solveshudu(shudu())
console.log('这个是原始数独')
console.table(initshudu)

var arrshudu=[].concat.apply([],initshudu)
console.log('这个是二维变一维的原始数独',arrshudu)

console.log('这个是挖空生成数独题目',makeshudu(arrshudu))

shuduanswer=solveshudu(arrshudu)
console.log('这个是答案')
console.table(shuduanswer)

for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        if(initshudu[i][j]===shuduanswer[i][j]){
            continue
        }else{
            console.log('题目答案不一致')
        }
    }
}
