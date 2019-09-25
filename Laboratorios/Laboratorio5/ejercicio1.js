function dataType_Arrays(array){
    var contN, cont
    for (let i = 0; i < array.length; i++) {
        var dataType = typeof array[i];
        console.log(dataType);
    }
}

var arr = ["David", 1, true, "Alejandro", 1.4, null];
dataType_Arrays(arr);