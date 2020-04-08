foo: for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        if ((i * j) >= 3) {
            console.log(i.j)
            break foo;
        }
        console.log(i, j)
    }
}