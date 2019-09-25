
function adivina(numero) {
    var array = [];
    for (let i = 0; i < 20; i++) {
        var numeroAleatorio = (Math.floor(Math.random()*50)+1);
        array[i] = numeroAleatorio;
    }
    console.log(array);

    for (let j = 0; j < array.length; j++) {
        if(array[j] == numero){
            console.log("Usted adivino el numero: ");
            break;
        }
        else{
            console.log("No ha adivinado el numero...");
            break;
        }
    }
}

var player = prompt("Ingresa tu numero: ", "1");
adivina(player);