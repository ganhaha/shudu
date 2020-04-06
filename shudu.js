function myFunction() {

    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var box = ["box1", "box5", "box9"]
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
            document.getElementsByClassName(box[boxnum])[0].children[i].innerHTML = arr[i]
            // document.getElementsByClassName("box5")[0].children[i].innerHTML=arr[i]
            // document.getElementsByClassName("box9")[0].children[i].innerHTML=arr[i]
        }


    }
    // *********************填充1，5，9大格子******************
    var arrtemp = []
    // for (var i =0;i<9;i++){
    //     arrtemp.push(document.getElementsByClassName("box1")[0].children[i].innerHTML)
    // }
    arrtemp.push(document.getElementsByClassName("box1")[0].children[0].innerHTML, document.getElementsByClassName("box1")[0].children[1].innerHTML, document.getElementsByClassName("box1")[0].children[2].innerHTML)
    arrtemp.push(document.getElementsByClassName("box5")[0].children[0].innerHTML, document.getElementsByClassName("box5")[0].children[3].innerHTML, document.getElementsByClassName("box5")[0].children[6].innerHTML)
    console.log("新的数组是：", arrtemp)
    
    
    var rndnum = Math.floor(Math.random() * 9)//取0到8随机数值，包括0不包括8
    console.log("数值K是：", rndnum)
    console.log("随机取到的数:", arr1[rndnum])
    console.log(arrtemp.includes(arr1[rndnum]))

    while(arrtemp.includes(arr1[rndnum])==true){
        rndnum = Math.floor(Math.random() * 9)
        
    }
    

}




// console.log(document.getElementsByClassName("box1")[0].children[0].innerHTML)
// console.log(document.getElementsByClassName("box1").length)