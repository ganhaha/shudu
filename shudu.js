//草稿 无用
function myFunction() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var box = ["box1", "box5", "box9"];

    // *********************填充1，5，9大格子******************
    for (boxnum in box) {
        // console.log(boxnum)
        var len = arr.length;

        for (var i = 0; i < len - 1; i++) {
            var index = parseInt(Math.random() * (len - i));
            var temp = arr[index];
            arr[index] = arr[len - i - 1];
            arr[len - i - 1] = temp;
        }

        for (var i = 0; i < 9; i++) {
            document.getElementsByClassName(box[boxnum])[0].children[i].innerHTML =
                arr[i];
        }
    }
    // *********************填充1，5，9大格子******************
    
    function box3change() {
        var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var flag = 0 //避免死循环

        var arrtemp = []; //临时对比数组

        arrtemp.push(
            parseInt(document.getElementsByClassName("box1")[0].children[0].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[1].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[2].innerHTML)
        );
        arrtemp.push(
            parseInt(document.getElementsByClassName("box9")[0].children[0].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[3].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[6].innerHTML)
        );




        var rndnum = Math.floor(Math.random() * 9); //取0到8随机数值，包括0不包括8


        /****************************************************/
        while (arrtemp.includes(arr1[rndnum]) == true) {
            rndnum = Math.floor(Math.random() * 9);
        } //这样可以保证取到的数不重复
        /****************************************************/

        // console.log("随机取到不重复的数:", arr1[rndnum]);
        document.getElementsByClassName("box3")[0].children[0].innerHTML =
            arr1[rndnum];
        arrtemp.splice(3)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);


        /****************************************************/
        arrtemp.push(
            parseInt(document.getElementsByClassName("box9")[0].children[1].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[4].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[7].innerHTML)
        );

        var rndnum = Math.floor(Math.random() * 8); //取0到7随机数值，包括0不包括7


        /****************************************************/

        while (arrtemp.includes(arr1[rndnum]) == true) {
            rndnum = Math.floor(Math.random() * 8);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box3")[0].children[1].innerHTML =
            arr1[rndnum];
        arrtemp.splice(4)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

        /****************************************************/
        arrtemp.push(
            parseInt(document.getElementsByClassName("box9")[0].children[2].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[5].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[8].innerHTML)
        );

        var rndnum = Math.floor(Math.random() * 7); //取0到6随机数值，包括0不包括6


        /****************************************************/

        while (arrtemp.includes(arr1[rndnum]) == true) {
            rndnum = Math.floor(Math.random() * 7);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box3")[0].children[2].innerHTML =
            arr1[rndnum];
        arrtemp.splice(5)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

        //////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////
        //如果最后几个有死循环就从这里开始重新计算


        var arrtemp = []; //临时对比数组

        arrtemp.push(
            parseInt(document.getElementsByClassName("box1")[0].children[3].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[4].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[5].innerHTML)
        );
        arrtemp.push(
            parseInt(document.getElementsByClassName("box9")[0].children[0].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[3].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[6].innerHTML)
        );

        var rndnum = Math.floor(Math.random() * 6);

        /****************************************************/
        flag = 0
        while (arrtemp.includes(arr1[rndnum]) == true) {
            if (flag > 10) {
                box3change()
            }
            flag++
            rndnum = Math.floor(Math.random() * 6);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box3")[0].children[3].innerHTML =
            arr1[rndnum];
        arrtemp.splice(3)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

        /****************************************************/
        arrtemp.push(
            parseInt(document.getElementsByClassName("box9")[0].children[1].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[4].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[7].innerHTML)
        );


        var rndnum = Math.floor(Math.random() * 5);

        /****************************************************/
        flag = 0
        while (arrtemp.includes(arr1[rndnum]) == true) {
            if (flag > 10) {
                box3change()
            }
            flag++
            rndnum = Math.floor(Math.random() * 5);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box3")[0].children[4].innerHTML =
            arr1[rndnum];
        arrtemp.splice(4)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);
        /****************************************************/
        arrtemp.push(
            parseInt(document.getElementsByClassName("box9")[0].children[2].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[5].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[8].innerHTML)
        );


        var rndnum = Math.floor(Math.random() * 4);

        /****************************************************/
        flag = 0
        while (arrtemp.includes(arr1[rndnum]) == true) {
            if (flag > 10) {
                box3change()
            }
            flag++
            rndnum = Math.floor(Math.random() * 4);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box3")[0].children[5].innerHTML =
            arr1[rndnum];
        arrtemp.splice(5)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

        //////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////
        var arrtemp = []; //临时对比数组

        arrtemp.push(
            parseInt(document.getElementsByClassName("box1")[0].children[6].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[7].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[8].innerHTML)
        );
        arrtemp.push(
            parseInt(document.getElementsByClassName("box9")[0].children[0].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[3].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[6].innerHTML)
        );


        var rndnum = Math.floor(Math.random() * 3);

        /****************************************************/
        flag = 0
        while (arrtemp.includes(arr1[rndnum]) == true) {
            if (flag > 10) {
                box3change()
            }
            flag++
            rndnum = Math.floor(Math.random() * 3);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box3")[0].children[6].innerHTML =
            arr1[rndnum];
        arrtemp.splice(3)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

        /****************************************************/
        arrtemp.push(
            parseInt(document.getElementsByClassName("box9")[0].children[1].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[4].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[7].innerHTML)
        );


        var rndnum = Math.floor(Math.random() * 2);

        /****************************************************/
        flag = 0
        while (arrtemp.includes(arr1[rndnum]) == true) {
            if (flag > 10) {
                box3change()
            }
            flag++
            rndnum = Math.floor(Math.random() * 2);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box3")[0].children[7].innerHTML =
            arr1[rndnum];
        arrtemp.splice(4)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

        arrtemp.push(
            parseInt(document.getElementsByClassName("box9")[0].children[2].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[5].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[8].innerHTML)
        );


        var rndnum = Math.floor(Math.random() * 1);

        /****************************************************/
        flag = 0

        while (arrtemp.includes(arr1[rndnum]) == true) {
            if (flag > 10) {
                box3change()
            }
            flag++
            rndnum = Math.floor(Math.random() * 1);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box3")[0].children[8].innerHTML =
            arr1[rndnum];
        arrtemp.splice(5)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);
    }

    box3change()











    function box7change() {
        var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var flag = 0 //避免死循环

        var arrtemp = []; //临时对比数组

        arrtemp.push(
            parseInt(document.getElementsByClassName("box9")[0].children[0].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[1].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[2].innerHTML)
        );
        arrtemp.push(
            parseInt(document.getElementsByClassName("box1")[0].children[0].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[3].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[6].innerHTML)
        );




        var rndnum = Math.floor(Math.random() * 9); //取0到8随机数值，包括0不包括8


        /****************************************************/
        while (arrtemp.includes(arr1[rndnum]) == true) {
            rndnum = Math.floor(Math.random() * 9);
        } //这样可以保证取到的数不重复
        /****************************************************/

        // console.log("随机取到不重复的数:", arr1[rndnum]);
        document.getElementsByClassName("box7")[0].children[0].innerHTML =
            arr1[rndnum];
        arrtemp.splice(3)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);


        /****************************************************/
        arrtemp.push(
            parseInt(document.getElementsByClassName("box1")[0].children[1].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[4].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[7].innerHTML)
        );

        var rndnum = Math.floor(Math.random() * 8); //取0到7随机数值，包括0不包括7


        /****************************************************/

        while (arrtemp.includes(arr1[rndnum]) == true) {
            rndnum = Math.floor(Math.random() * 8);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box7")[0].children[1].innerHTML =
            arr1[rndnum];
        arrtemp.splice(4)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

        /****************************************************/
        arrtemp.push(
            parseInt(document.getElementsByClassName("box1")[0].children[2].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[5].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[8].innerHTML)
        );

        var rndnum = Math.floor(Math.random() * 7); //取0到6随机数值，包括0不包括6


        /****************************************************/

        while (arrtemp.includes(arr1[rndnum]) == true) {
            rndnum = Math.floor(Math.random() * 7);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box7")[0].children[2].innerHTML =
            arr1[rndnum];
        arrtemp.splice(5)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

        //////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////
        //如果最后几个有死循环就从这里开始重新计算


        var arrtemp = []; //临时对比数组

        arrtemp.push(
            parseInt(document.getElementsByClassName("box9")[0].children[3].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[4].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[5].innerHTML)
        );
        arrtemp.push(
            parseInt(document.getElementsByClassName("box1")[0].children[0].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[3].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[6].innerHTML)
        );

        var rndnum = Math.floor(Math.random() * 6);

        /****************************************************/
        flag = 0
        while (arrtemp.includes(arr1[rndnum]) == true) {
            if (flag > 10) {
                box7change()
            }
            flag++
            rndnum = Math.floor(Math.random() * 6);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box7")[0].children[3].innerHTML =
            arr1[rndnum];
        arrtemp.splice(3)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

        /****************************************************/
        arrtemp.push(
            parseInt(document.getElementsByClassName("box1")[0].children[1].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[4].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[7].innerHTML)
        );


        var rndnum = Math.floor(Math.random() * 5);

        /****************************************************/
        flag = 0
        while (arrtemp.includes(arr1[rndnum]) == true) {
            if (flag > 10) {
                box7change()
            }
            flag++
            rndnum = Math.floor(Math.random() * 5);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box7")[0].children[4].innerHTML =
            arr1[rndnum];
        arrtemp.splice(4)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);
        /****************************************************/
        arrtemp.push(
            parseInt(document.getElementsByClassName("box1")[0].children[2].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[5].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[8].innerHTML)
        );


        var rndnum = Math.floor(Math.random() * 4);

        /****************************************************/
        flag = 0
        while (arrtemp.includes(arr1[rndnum]) == true) {
            if (flag > 10) {
                box7change()
            }
            flag++
            rndnum = Math.floor(Math.random() * 4);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box7")[0].children[5].innerHTML =
            arr1[rndnum];
        arrtemp.splice(5)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

        //////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////
        var arrtemp = []; //临时对比数组

        arrtemp.push(
            parseInt(document.getElementsByClassName("box9")[0].children[6].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[7].innerHTML),
            parseInt(document.getElementsByClassName("box9")[0].children[8].innerHTML)
        );
        arrtemp.push(
            parseInt(document.getElementsByClassName("box1")[0].children[0].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[3].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[6].innerHTML)
        );


        var rndnum = Math.floor(Math.random() * 3);

        /****************************************************/
        flag = 0
        while (arrtemp.includes(arr1[rndnum]) == true) {
            if (flag > 10) {
                box7change()
            }
            flag++
            rndnum = Math.floor(Math.random() * 3);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box7")[0].children[6].innerHTML =
            arr1[rndnum];
        arrtemp.splice(3)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

        /****************************************************/
        arrtemp.push(
            parseInt(document.getElementsByClassName("box1")[0].children[1].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[4].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[7].innerHTML)
        );


        var rndnum = Math.floor(Math.random() * 2);

        /****************************************************/
        flag = 0
        while (arrtemp.includes(arr1[rndnum]) == true) {
            if (flag > 10) {
                box7change()
            }
            flag++
            rndnum = Math.floor(Math.random() * 2);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box7")[0].children[7].innerHTML =
            arr1[rndnum];
        arrtemp.splice(4)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

        arrtemp.push(
            parseInt(document.getElementsByClassName("box1")[0].children[2].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[5].innerHTML),
            parseInt(document.getElementsByClassName("box1")[0].children[8].innerHTML)
        );


        var rndnum = Math.floor(Math.random() * 1);

        /****************************************************/
        flag = 0

        while (arrtemp.includes(arr1[rndnum]) == true) {
            if (flag > 10) {
                box7change()
            }
            flag++
            rndnum = Math.floor(Math.random() * 1);
        } //这样可以保证取到的数不重复
        /****************************************************/

        document.getElementsByClassName("box7")[0].children[8].innerHTML =
            arr1[rndnum];
        arrtemp.splice(5)
        arrtemp.push(arr1[rndnum]);
        arr1.splice(arr1.indexOf(arr1[rndnum]), 1);
    }

    box7change()
}