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

try{
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            for (k = 0; k < 3; k++) {
                atemp.push(a[k + i * 9])

            }
            for (k = 0; k < 3; k++) {

                atemp.push(a[60 + k * 9 + j])
            }
            console.log(atemp)

            // atemp.push(a[j + i * 9])

            // console.log(atemp)
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
            if (typeof (rndnum) == undefined) {
                console.log('有错误')
                // break
            }
            console.log(rndnum)

            // // a[7 + j * 9 + k]=init[rndnum]
            init.splice(init.indexOf(rndnum), 1)


            // for (j = 0; j < 3; j++) {            
            //     atemp.push(a[60+i + j * 9])     
            atemp = []
        }

    }
}catch(e){
    console.log(e)
}


console.log(a)