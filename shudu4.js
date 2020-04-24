function shudu() {
    var a = []; //整个大的数组
    for (var i = 0; i < 81; i++) {
        a.push(0); //整个大数组清零
    }
    box159(a)
    box3(a)
    box7(a) //基本上到box7都不会有问题所以就不需要额外递归回去
    if (box2(a) == 'no') {
        // console.log('box2无解')
        shudu()
    } else if (box4(a) == 'no') {
        // console.log('box4无解')
        shudu()
    } else if (box8(a) == 'no') {
        // console.log('box8无解')
        shudu()
    } else if (box6(a) == 'no') {
        // console.log('box6无解')
        shudu()
    } else {
        // console.log(a)
        makeshudu(a)
    }
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
    for (i = 0; i < 3; i++) {
        var m = 0;
        a159 = set159();
        for (j = 0; j < 3; j++) {
            for (k = 0; k < 3; k++) {
                a[i * 30 + j * 9 + k] = a159[m];
                m++;
            }
        }
    }

}

function box3(a) {
    var atemp = [];
    var init = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var boxnum = [];
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            for (k = 0; k < 3; k++) {
                atemp.push(a[k + i * 9]);
            }
            for (k = 0; k < 3; k++) {
                atemp.push(a[60 + k * 9 + j]);
            }

            rndnum = init[Math.floor(Math.random() * init.length)];
            m = 0;
            while (atemp.includes(rndnum) == true) {
                rndnum = init[Math.floor(Math.random() * init.length)];
                if (m > 5) {

                    return box3(a);

                }
                m++;
            }

            boxnum.push(rndnum);

            init.splice(init.indexOf(rndnum), 1);

            atemp = [];
        }
    }

    for (i = 0; i < 9; i++) {
        if (i > 5) {
            //i=6,7,8
            a[i + 18] = boxnum[i];
        } else if (i < 3) {
            //i=0,1,2
            a[i + 6] = boxnum[i];
        } else {
            //i=3,4,5
            a[i + 12] = boxnum[i];
        }
    }

}

function box7(a) {
    var atemp = [];
    var init = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var boxnum = [];
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            for (k = 60; k < 63; k++) {
                atemp.push(a[k + i * 9]);
            }
            for (k = 0; k < 3; k++) {
                atemp.push(a[k * 9 + j]);
            }
            rndnum = init[Math.floor(Math.random() * init.length)];
            m = 0;
            while (atemp.includes(rndnum) == true) {
                rndnum = init[Math.floor(Math.random() * init.length)];
                if (m > 5) {
                    return box7(a);
                }
                m++;
            }
            boxnum.push(rndnum);

            init.splice(init.indexOf(rndnum), 1);

            atemp = [];
        }
    }


    for (i = 0; i < 9; i++) {
        if (i > 5) {
            //i=6,7,8
            a[i + 66] = boxnum[i];
        } else if (i < 3) {
            //i=0,1,2
            a[i + 54] = boxnum[i];
        } else {
            //i=3,4,5
            a[i + 60] = boxnum[i];
        }
    }

}

function box2(a) {
    var atemp = [];
    var init = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var boxnum = [];
    try {


        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                for (k = 0; k < 3; k++) {
                    atemp.push(a[k + i * 9]);
                }
                for (k = 0; k < 3; k++) {
                    atemp.push(a[k + i * 9 + 6]);
                }
                for (k = 0; k < 3; k++) {
                    atemp.push(a[k * 9 + 30 + j]);
                }
                rndnum = init[Math.floor(Math.random() * init.length)];
                m = 0;
                while (atemp.includes(rndnum) == true) {
                    rndnum = init[Math.floor(Math.random() * init.length)];
                    if (m > 5) {
                        return box2(a);

                    }
                    m++;
                }
                boxnum.push(rndnum);

                init.splice(init.indexOf(rndnum), 1);

                atemp = [];
            }
        }
    } catch (e) {
        return 'no'
    }

    for (i = 0; i < 9; i++) {
        if (i > 5) {
            //i=6,7,8
            a[i + 15] = boxnum[i];
        } else if (i < 3) {
            //i=0,1,2
            a[i + 3] = boxnum[i];
        } else {
            //i=3,4,5
            a[i + 9] = boxnum[i];
        }
    }
}

function box4(a) {
    var atemp = [];
    var init = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var boxnum = [];
    try {
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                for (k = 0; k < 3; k++) {
                    atemp.push(a[30 + k + 9 * i]);
                }
                for (k = 0; k < 3; k++) {
                    atemp.push(a[33 + k + 9 * i]);
                }
                for (k = 0; k < 3; k++) {
                    atemp.push(a[k * 9 + j]);
                }
                for (k = 0; k < 3; k++) {
                    atemp.push(a[k * 9 + j + 54]);
                }
                rndnum = init[Math.floor(Math.random() * init.length)];
                m = 0;
                while (atemp.includes(rndnum) == true) {
                    rndnum = init[Math.floor(Math.random() * init.length)];
                    if (m > 5) {
                        return box4(a);

                    }
                    m++;
                }
                boxnum.push(rndnum);

                init.splice(init.indexOf(rndnum), 1);

                atemp = [];
                // console.log(rndnum)
            }
        }
    } catch (e) {
        return 'no'
    }


    for (i = 0; i < 9; i++) {
        if (i > 5) {
            //i=6,7,8
            a[i + 39] = boxnum[i];
        } else if (i < 3) {
            //i=0,1,2
            a[i + 27] = boxnum[i];
        } else {
            //i=3,4,5
            a[i + 33] = boxnum[i];
        }
    }
}

function box8(a) {
    var atemp = [];
    var init = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var boxnum = [];
    try {
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                for (k = 0; k < 3; k++) {
                    atemp.push(a[54 + k + i * 9])
                    atemp.push(a[60 + k + i * 9])

                }
                for (k = 0; k < 6; k++) {
                    atemp.push(a[3 + k * 9 + j])
                }

                rndnum = init[Math.floor(Math.random() * init.length)];
                m = 0;
                while (atemp.includes(rndnum) == true) {
                    rndnum = init[Math.floor(Math.random() * init.length)];
                    if (m > 5) {
                        return box8(a);

                    }
                    m++;
                }
                boxnum.push(rndnum);

                init.splice(init.indexOf(rndnum), 1);

                atemp = [];
            }
        }
    } catch (e) {
        return 'no'
    }

    for (i = 0; i < 9; i++) {
        if (i > 5) {
            //i=6,7,8
            a[i + 69] = boxnum[i];
        } else if (i < 3) {
            //i=0,1,2
            a[i + 57] = boxnum[i];
        } else {
            //i=3,4,5
            a[i + 63] = boxnum[i];
        }
    }
}

function box6(a) {
    var atemp = [];
    var init = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var boxnum = [];
    try {
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                for (k = 0; k < 3; k++) {
                    atemp.push(a[6 + j + k * 9])
                    atemp.push(a[60 + j + k * 9])

                }
                for (k = 0; k < 6; k++) {
                    atemp.push(a[27 + k + i * 9])

                }

                rndnum = init[Math.floor(Math.random() * init.length)];
                m = 0;
                while (atemp.includes(rndnum) == true) {
                    rndnum = init[Math.floor(Math.random() * init.length)];
                    if (m > 5) {
                        return box6(a);

                    }
                    m++;
                }
                boxnum.push(rndnum);

                init.splice(init.indexOf(rndnum), 1);

                atemp = [];
            }
        }
    } catch (e) {
        return 'no'
    }

    for (i = 0; i < 9; i++) {
        if (i > 5) {
            //i=6,7,8
            a[i + 36] = boxnum[i];
        } else if (i < 3) {
            //i=0,1,2
            a[i + 33] = boxnum[i];
        } else {
            //i=3,4,5
            a[i + 48] = boxnum[i];
        }
    }
}
//挖空生成数独题
function makeshudu(a) {
    console.log(a)
    // a[Math.floor(Math.random() * 81)]
    for (i = 0; i < 51; i++) {
        var k = Math.floor(Math.random() * 81)
        while (a[k] == 0) {
            k = Math.floor(Math.random() * 81)
        }
        a[k] = 0
    }
    console.log(a)
    showhtml(a)
}

function showhtml(a) {
box9
    atemp = []

    for (var m = 0; m < 3; m++) {//m用来控制box1，box2.....box9
        for (var i = 0; i < 3; i++) {//i用来控制大的列 如box1，box2，box3
            for (var j = 0; j < 3; j++) {//j用来控制9宫格内的列
                for (var k = 0; k < 3; k++) {//k用来控制9宫格内行增加1
                    atemp.push(a[27 * m + 3 * i + 9 * j + k])
                }
            }
            var boxnum = i + 1 + 3 * m
            for (n = 0; n < atemp.length; n++) {
                document.getElementsByClassName('box' + boxnum)[0].children[n].innerHTML = atemp[n]
            }
            // console.log('atemp:', atemp)
            atemp = []
        }
    }

}
shudu()
// makeshudu()
// showhtml()