function shuduhtml() {
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
    // document.getElementsByClassName('showtext')[0].innerHTML = '' //答案提示清除

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
            var a159 = set159();
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


        for (var i = 0; i < 1; i++) { //循环次数就是空格数。感觉到30个空格是唯一解的极限！
            var k = Math.floor(Math.random() * 81)
            while (a[k] == 0) {
                k = Math.floor(Math.random() * 81)
            }
            a[k] = 0
        }
        return a
    }
    var shuduinit = solveshudu(shudu())
    console.log('这个是原始数独')
    console.table(shuduinit)


    var shuduarr = [].concat.apply([], shuduinit)
    console.log('这个是二维变一维的原始数独', shuduarr)


    var shuduproblem = makeshudu(shuduarr)
    console.log('这个是挖空生成一维数独题目', shuduproblem)


    showhtml(shuduproblem)

    function showhtml(a) {

        // var atemp = []

        // for (var m = 0; m < 3; m++) { //m用来控制box1，box2.....box9
        //     for (var i = 0; i < 3; i++) { //i用来控制大的列 如box1，box2，box3
        //         for (var j = 0; j < 3; j++) { //j用来控制9宫格内的列
        //             for (var k = 0; k < 3; k++) { //k用来控制9宫格内行增加1
        //                 atemp.push(a[27 * m + 3 * i + 9 * j + k])
        //             }
        //         }
        //         var boxnum = i + 1 + 3 * m
        //         for (var n = 0; n < atemp.length; n++) {
        //             document.getElementsByClassName('box' + boxnum)[0].children[n].innerHTML = atemp[n]

        //             if (document.getElementsByClassName('box' + boxnum)[0].children[n].innerHTML === '0') {
        //                 document.getElementsByClassName('box' + boxnum)[0].children[n].innerHTML = ' <input type="text" class= inputbox maxlength=1 >'
        //             } //把是0的单元格变成可填数
        //         }
        //         // console.log('atemp:', atemp)
        //         atemp = []
        //     }
        // }
        for (let i = 0; i < 81; i++) {
            document.getElementsByClassName('shudubox')[i].innerHTML = a[i]
            if (document.getElementsByClassName('shudubox')[i].innerHTML === '0') {
                document.getElementsByClassName('shudubox')[i].innerHTML = '<input type="text" class= inputbox maxlength=1 >'
            }

        }
    }

    //因为存在赋值覆盖的问题，所以把答案比对放到HTML生成之后
    var shuduanswer = solveshudu(shuduarr)
    console.log('这个是答案')
    console.table(shuduanswer)

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (shuduinit[i][j] === shuduanswer[i][j]) {
                continue
            } else {
                console.log('题目答案不一致')
            }
        }
    }

    return
}

function shuducheck() {
    var answerhtml = []
    var answer = []
    
    var i, j = 0
    var re = /^[0-9]+.?[0-9]*$/ //正则表达式判断填入的是否是数字

    for (i = 0; i < 81; i++) {
        if (document.getElementsByClassName('shudubox')[i].innerText === '') {
            if (document.getElementsByClassName('inputbox')[j].value === '') {
                alert('请填入数字！')
                document.getElementsByClassName('showtext')[0].innerHTML = '' //答案提示清除
                return
            } else if (!re.test(document.getElementsByClassName('inputbox')[j].value)) {
                alert('请填入数字！') //正则表达式判断填入的是否是数字
                document.getElementsByClassName('showtext')[0].innerHTML = '' //答案提示清除
                return
            } else {
                answerhtml.push(document.getElementsByClassName('inputbox')[j].value)
                j++
            }


        } else {
            answerhtml.push(document.getElementsByClassName('shudubox')[i].innerText)
        }
    }

    // for (var m = 0; m < 3; m++) { //m用来控制box1，box2.....box9
    //     for (var i = 0; i < 3; i++) { //i用来控制大的列 如box1，box2，box3
    //         for (var j = 0; j < 3; j++) { //j用来控制9宫格内的列
    //             for (var k = 0; k < 3; k++) { //k用来控制9宫格内行增加1
    //                 temp.push(parseInt(answerhtml[27 * m + 3 * i + 9 * j + k]))
    //             }
    //         }
    //     }
    // } //这个是把html的9宫格转变成横的数组

    while (answerhtml.length > 0) {
        answer.push(answerhtml.splice(0, 9));
    } //这是是把html的答案变成二维数组

    console.table(answer)

    var shuduanswerflag = 0

    for (let m = 0; m < 9; m++) {
        for (let n = 0; n < 9; n++) {
            if (shuducheckHtmlanswer(m, n) === '合法') {
                // console.log('right answer')
                shuduanswerflag++
            } else {
                // console.log('wrong! try again!')
                shuduanswerflag = 0
                break
            }
        }
    }

    if (shuduanswerflag === 81) {
        document.getElementsByClassName('showtext')[0].innerHTML = '恭喜！答对了！'
        console.log('right answer')
    } else {
        document.getElementsByClassName('showtext')[0].innerHTML = '答错了！再接再厉！'
        console.log('wrong! try again!')
    }

    return

    function shuducheckHtmlanswer(m, n) {

        for (let i = 0; i < 9; i++) {
            if (answer[m][n] === answer[i][n]) {
                if (m === i) {
                    continue
                } else {
                    return '冲突'
                }
            }
        } //检测行

        for (let j = 0; j < 9; j++) {
            if (answer[m][n] === answer[m][j]) {
                if (n === j) {
                    continue
                } else {
                    return '冲突'
                }
            }
        } //检测列

        for (let i = parseInt(m / 3) * 3; i < (parseInt(m / 3) + 1) * 3; i++) {
            for (let j = parseInt(n / 3) * 3; j < (parseInt(n / 3) + 1) * 3; j++) {
                if (answer[m][n] === answer[i][j]) {
                    if (m === i && n === j) {
                        continue
                    } else {
                        return '冲突'
                    }
                }
            }
        } //检测所在宫

        return '合法'
    }
}