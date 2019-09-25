function suma_array(a) {
    var suma = 0, promedio = 0;
    for (let i = 0; i < a.length; i++) {
            suma = suma + a[i];
    }
    promedio = suma / a.length;
    console.log("Suma: " + suma);
    console.log("Promedio: " + promedio);
}

var numbersArray = [1,2,6,14,8,5];
suma_array(numbersArray);