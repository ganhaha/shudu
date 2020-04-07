function myFunction() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
            // document.getElementsByClassName("box5")[0].children[i].innerHTML=arr[i]
            // document.getElementsByClassName("box9")[0].children[i].innerHTML=arr[i]
        }
    }
    // *********************填充1，5，9大格子******************
    var arrtemp = []; //临时对比数组
    // for (var i =0;i<9;i++){
    //     arrtemp.push(document.getElementsByClassName("box1")[0].children[i].innerHTML)
    // }
    arrtemp.push(
        parseInt(document.getElementsByClassName("box1")[0].children[0].innerHTML),
        parseInt(document.getElementsByClassName("box1")[0].children[1].innerHTML),
        parseInt(document.getElementsByClassName("box1")[0].children[2].innerHTML)
    );
    arrtemp.push(
        parseInt(document.getElementsByClassName("box5")[0].children[0].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[3].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[6].innerHTML)
    );


    // console.log("临时对比数组arrtemp：", arrtemp); //arrtemp临时对比数组

    var rndnum = Math.floor(Math.random() * 9); //取0到8随机数值，包括0不包括8
    // console.log("数值K是：", rndnum);
    // console.log("随机取到的数:", arr1[rndnum]);
    // console.log(arrtemp.includes(arr1[rndnum]));

    /****************************************************/
    while (arrtemp.includes(arr1[rndnum]) == true) {
        rndnum = Math.floor(Math.random() * 9);
    } //这样可以保证取到的数不重复
    /****************************************************/

    // console.log("随机取到不重复的数:", arr1[rndnum]);
    document.getElementsByClassName("box2")[0].children[0].innerHTML =
        arr1[rndnum];
    arrtemp.splice(3)
    arrtemp.push(arr1[rndnum]);
    arr1.splice(arr1.indexOf(arr1[rndnum]), 1);
    // console.log("删除取数池：", arr1);
    // console.log("增临时对比数组：", arrtemp);

    /****************************************************/
    arrtemp.push(
        parseInt(document.getElementsByClassName("box5")[0].children[1].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[4].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[7].innerHTML)
    );

    var rndnum = Math.floor(Math.random() * 8); //取0到7随机数值，包括0不包括7
    // console.log("数值K是：", rndnum);
    // console.log("随机取到的数:", arr1[rndnum]);
    // console.log(arrtemp.includes(String(arr1[rndnum])));

    /****************************************************/
    while (arrtemp.includes(arr1[rndnum]) == true) {
        rndnum = Math.floor(Math.random() * 8);
    } //这样可以保证取到的数不重复
    /****************************************************/
    // console.log("随机取到不重复的数:", arr1[rndnum]);
    document.getElementsByClassName("box2")[0].children[1].innerHTML =
        arr1[rndnum];
    arrtemp.splice(4)
    arrtemp.push(arr1[rndnum]);
    arr1.splice(arr1.indexOf(arr1[rndnum]), 1);
    // console.log("删除取数池：", arr1);
    // console.log("增临时对比数组arrtemp：", arrtemp);

    /****************************************************/
    arrtemp.push(
        parseInt(document.getElementsByClassName("box5")[0].children[2].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[5].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[8].innerHTML)
    );

    var rndnum = Math.floor(Math.random() * 7); //取0到6随机数值，包括0不包括6
    // console.log("数值K是：", rndnum);
    // console.log("随机取到的数:", arr1[rndnum]);
    // console.log(arrtemp.includes(String(arr1[rndnum])));

    /****************************************************/
    while (arrtemp.includes(arr1[rndnum]) == true) {
        rndnum = Math.floor(Math.random() * 7);
    } //这样可以保证取到的数不重复
    /****************************************************/
    // console.log("随机取到不重复的数:", arr1[rndnum]);
    document.getElementsByClassName("box2")[0].children[2].innerHTML =
        arr1[rndnum];
    arrtemp.splice(5)
    arrtemp.push(arr1[rndnum]);
    arr1.splice(arr1.indexOf(arr1[rndnum]), 1);
    // console.log("删除取数池：", arr1);
    // console.log("增临时对比数组arrtemp：", arrtemp);
    // console.log("arr1:",arr1)
    // console.log("arrtemp",arrtemp)
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    var arrtemp = []; //临时对比数组
  
    arrtemp.push(
        parseInt(document.getElementsByClassName("box1")[0].children[3].innerHTML),
        parseInt(document.getElementsByClassName("box1")[0].children[4].innerHTML),
        parseInt(document.getElementsByClassName("box1")[0].children[5].innerHTML)
    );
    arrtemp.push(
        parseInt(document.getElementsByClassName("box5")[0].children[0].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[3].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[6].innerHTML)
    );

    // console.log("临时对比数组arrtemp：", arrtemp); //arrtemp临时对比数组
    var rndnum = Math.floor(Math.random() *6); 
    // console.log("数值K是：", rndnum);
    // console.log("随机取到的数:", arr1[rndnum]);
    // console.log(arrtemp.includes(arr1[rndnum]));
     /****************************************************/
     while (arrtemp.includes(arr1[rndnum]) == true) {
        rndnum = Math.floor(Math.random() * 6);
    } //这样可以保证取到的数不重复
    /****************************************************/
    // console.log("随机取到不重复的数:", arr1[rndnum]);
    document.getElementsByClassName("box2")[0].children[3].innerHTML =
        arr1[rndnum];
    arrtemp.splice(3)
    arrtemp.push(arr1[rndnum]);
    arr1.splice(arr1.indexOf(arr1[rndnum]), 1);
    // console.log("删除取数池：", arr1);
    // console.log("增临时对比数组：", arrtemp);
    /****************************************************/
    arrtemp.push(
        parseInt(document.getElementsByClassName("box5")[0].children[1].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[4].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[7].innerHTML)
    );

    // console.log("临时对比数组arrtemp：", arrtemp); //arrtemp临时对比数组
    var rndnum = Math.floor(Math.random() *5); 
    // console.log("数值K是：", rndnum);
    // console.log("随机取到的数:", arr1[rndnum]);
    // console.log(arrtemp.includes(arr1[rndnum]));
     /****************************************************/
     while (arrtemp.includes(arr1[rndnum]) == true) {
        rndnum = Math.floor(Math.random() * 5);
    } //这样可以保证取到的数不重复
    /****************************************************/
    // console.log("随机取到不重复的数:", arr1[rndnum]);
    document.getElementsByClassName("box2")[0].children[4].innerHTML =
        arr1[rndnum];
    arrtemp.splice(4)
    arrtemp.push(arr1[rndnum]);
    arr1.splice(arr1.indexOf(arr1[rndnum]), 1);
    /****************************************************/
    arrtemp.push(
        parseInt(document.getElementsByClassName("box5")[0].children[2].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[5].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[8].innerHTML)
    );

    // console.log("临时对比数组arrtemp：", arrtemp); //arrtemp临时对比数组
    var rndnum = Math.floor(Math.random() *4); 
    // console.log("数值K是：", rndnum);
    // console.log("随机取到的数:", arr1[rndnum]);
    // console.log(arrtemp.includes(arr1[rndnum]));
     /****************************************************/
     while (arrtemp.includes(arr1[rndnum]) == true) {
        rndnum = Math.floor(Math.random() * 4);
    } //这样可以保证取到的数不重复
    /****************************************************/
    // console.log("随机取到不重复的数:", arr1[rndnum]);
    document.getElementsByClassName("box2")[0].children[5].innerHTML =
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
        parseInt(document.getElementsByClassName("box5")[0].children[0].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[3].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[6].innerHTML)
    );

    // console.log("临时对比数组arrtemp：", arrtemp); //arrtemp临时对比数组
    var rndnum = Math.floor(Math.random() *3); 
    // console.log("数值K是：", rndnum);
    // console.log("随机取到的数:", arr1[rndnum]);
    // console.log(arrtemp.includes(arr1[rndnum]));
     /****************************************************/
     while (arrtemp.includes(arr1[rndnum]) == true) {
        rndnum = Math.floor(Math.random() * 3);
    } //这样可以保证取到的数不重复
    /****************************************************/
    // console.log("随机取到不重复的数:", arr1[rndnum]);
    document.getElementsByClassName("box2")[0].children[6].innerHTML =
        arr1[rndnum];
    arrtemp.splice(3)
    arrtemp.push(arr1[rndnum]);
    arr1.splice(arr1.indexOf(arr1[rndnum]), 1);
    // console.log("删除取数池：", arr1);
    // console.log("增临时对比数组：", arrtemp);
    /****************************************************/
    arrtemp.push(
        parseInt(document.getElementsByClassName("box5")[0].children[1].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[4].innerHTML),
        parseInt(document.getElementsByClassName("box5")[0].children[7].innerHTML)
    );

    // console.log("临时对比数组arrtemp：", arrtemp); //arrtemp临时对比数组
    var rndnum = Math.floor(Math.random() *2); 
    // console.log("数值K是：", rndnum);
    // console.log("随机取到的数:", arr1[rndnum]);
    // console.log(arrtemp.includes(arr1[rndnum]));
     /****************************************************/
     while (arrtemp.includes(arr1[rndnum]) == true) {
        rndnum = Math.floor(Math.random() * 2);
    } //这样可以保证取到的数不重复
    /****************************************************/
    // console.log("随机取到不重复的数:", arr1[rndnum]);
    document.getElementsByClassName("box2")[0].children[7].innerHTML =
        arr1[rndnum];
    arrtemp.splice(4)
    arrtemp.push(arr1[rndnum]);
    arr1.splice(arr1.indexOf(arr1[rndnum]), 1);
    /****************************************************/
    // arrtemp.push(
    //     parseInt(document.getElementsByClassName("box5")[0].children[2].innerHTML),
    //     parseInt(document.getElementsByClassName("box5")[0].children[5].innerHTML),
    //     parseInt(document.getElementsByClassName("box5")[0].children[8].innerHTML)
    // );

    // // console.log("临时对比数组arrtemp：", arrtemp); //arrtemp临时对比数组
    // var rndnum = Math.floor(Math.random() *1); 
    // // console.log("数值K是：", rndnum);
    // // console.log("随机取到的数:", arr1[rndnum]);
    // // console.log(arrtemp.includes(arr1[rndnum]));
    //  /****************************************************/
    //  while (arrtemp.includes(arr1[rndnum]) == true) {
    //     rndnum = Math.floor(Math.random() * 1);
    // } //这样可以保证取到的数不重复
    // /****************************************************/
    // // console.log("随机取到不重复的数:", arr1[rndnum]);
    // document.getElementsByClassName("box2")[0].children[8].innerHTML =
    //     arr1[rndnum];
    // arrtemp.splice(5)
    // arrtemp.push(arr1[rndnum]);
    // arr1.splice(arr1.indexOf(arr1[rndnum]), 1);

    document.getElementsByClassName("box2")[0].children[8].innerHTML =
        arr1[0];
}

