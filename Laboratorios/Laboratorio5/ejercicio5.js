function palindromo(palabra){
    var isPalindromo = true;
    var original = palabra.split("");

    var invertido = palabra.split("").reverse();

    for (let i = 0; i < original.length; i++) {
        if (invertido[i] != original[i]) {
            console.log("no es palindromo");
            isPalindromo = false;
            break;
        }
    }

    if(isPalindromo == true){
        console.log("Es palindromo");
    }
}


palindromo("oso");