function ocurrencias(number, array) {
    var contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) 
            contador++;
    }
    console.log(array);
    console.log("Numero a evaluar: " + number);
    console.log("Ocurrencias: " + contador);
}

var a = [1,2,1,3,2,1,2,3,1,2,4,2,3];
ocurrencias(2,a);