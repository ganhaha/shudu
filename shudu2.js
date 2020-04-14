function shudu() {

    function set159() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        var len = arr.length
        for (var i = 0; i < len - 1; i++) {
            var index = parseInt(Math.random() * (len - i));
            var temp = arr[index];
            arr[index] = arr[len - i - 1];
            arr[len - i - 1] = temp;
        }
        return arr
    }


    var a = [] //整个大的数组
    var i, j, k, m
    var a159 = []
    var atemp = []
    var init = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var rndnum = init[Math.floor(Math.random() * init.length)] //从init中随机取的数,每取一次数，从init中去除这个数
    //初始化数组
    var boxnum = []
    for (i = 0; i < 81; i++) {
        a.push(0)
    }
    //159大方块赋值
    for (i = 0; i < 3; i++) {
        var m = 0
        a159 = set159()
        for (j = 0; j < 3; j++) {
            for (k = 0; k < 3; k++) {
                a[i * 30 + j * 9 + k] = a159[m]
                m++
            }
        }
    }
    //3号大方块

    try {
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                for (k = 0; k < 3; k++) {
                    atemp.push(a[k + i * 9])

                }
                for (k = 0; k < 3; k++) {

                    atemp.push(a[60 + k * 9 + j])
                }
                // console.log(atemp)

                // atemp.push(a[j + i * 9])

                // console.log(atemp)
                rndnum = init[Math.floor(Math.random() * init.length)]
                m = 0
                while (atemp.includes(rndnum) == true) {
                    rndnum = init[Math.floor(Math.random() * init.length)]
                    if (m > 5) {
                        // console.log('出现死循环整体跳出')

                        throw '死循环'
                        // continue outfor                    
                    }
                    m++
                }
                // ////没有什么好的迭代方法吗
                // if (typeof (rndnum) == undefined) {
                //     boxnum=[]
                //     console.log('有错误')
                //     // break
                // }
                // console.log(rndnum)
                boxnum.push(rndnum)
                // // a[7 + j * 9 + k]=init[rndnum]
                init.splice(init.indexOf(rndnum), 1)


                // for (j = 0; j < 3; j++) {            
                //     atemp.push(a[60+i + j * 9])     
                atemp = []
            }

        }
    } catch (e) {
        // console.log('死循环')
        a = [] //出现死循环后大数组清零
        boxnum = [] //出现死循环后错误的需要填写的数组清零
        shudu()
    }
    // if (boxnum.includes(undefined) == false && boxnum.includes(' ') == false && boxnum.length > 0) {
    // if (boxnum.includes(undefined) == false && boxnum.length == 9 && boxnum.includes('') == false) {
        // console.log(a)
        // console.log(boxnum)
        for (i = 0; i < 9; i++) {
            if (i > 5) { //i=6,7,8
                a[i + 18] = boxnum[i]
            } else if (i < 3) { //i=0,1,2
                a[i + 6] = boxnum[i]
            } else { //i=3,4,5
                a[i + 12] = boxnum[i]
            }

        // }
        // console.log(a)
    }

    //7号大方块
    var atemp = []
    var init = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var rndnum = init[Math.floor(Math.random() * init.length)] //从init中随机取的数,每取一次数，从init中去除这个数
    //初始化数组
    var boxnum = []
    try {
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                for (k = 60; k < 63; k++) {
                    atemp.push(a[k + i * 9])

                }
                for (k = 0; k < 3; k++) {

                    atemp.push(a[k * 9 + j])
                }
                // console.log(atemp)

                // atemp.push(a[j + i * 9])

                // console.log(atemp)
                rndnum = init[Math.floor(Math.random() * init.length)]
                m = 0
                while (atemp.includes(rndnum) == true) {
                    rndnum = init[Math.floor(Math.random() * init.length)]
                    if (m > 5) {
                        // console.log('出现死循环整体跳出')

                        throw '死循环'
                        // continue outfor                    
                    }
                    m++
                }
                // ////没有什么好的迭代方法吗
                // if (typeof (rndnum) == undefined) {
                //     boxnum=[]
                //     console.log('有错误')
                //     // break
                // }
                // console.log(rndnum)
                boxnum.push(rndnum)
                // // a[7 + j * 9 + k]=init[rndnum]
                init.splice(init.indexOf(rndnum), 1)


                // for (j = 0; j < 3; j++) {            
                //     atemp.push(a[60+i + j * 9])     
                atemp = []
            }

        }
    } catch (e) {
        // console.log('死循环')
        a = [] //出现死循环后大数组清零
        boxnum = [] //出现死循环后错误的需要填写的数组清零
        shudu()
    }
    // if (boxnum.includes(undefined) == false && boxnum.length == 9 && boxnum.includes('') == false) {
        // console.log(a)
        // console.log(boxnum)
        for (i = 0; i < 9; i++) {
            if (i > 5) { //i=6,7,8
                a[i + 66] = boxnum[i]
            } else if (i < 3) { //i=0,1,2
                a[i + 54] = boxnum[i]
            } else { //i=3,4,5
                a[i + 60] = boxnum[i]
            }

        }

    // }
    if(a.includes(undefined)==false){
        console.log(a)
    }
    
}
shudu()