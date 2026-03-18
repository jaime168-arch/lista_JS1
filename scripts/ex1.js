function somarNumeros(){
    let soma = 0;
    let continuar = true;
    while (continuar){
        let numero = parseFloat( prompt("digite um numero para somar: ") );
        if ( !isNaN(numero) ){
              soma += numero;
            //soma = soma + numero
            console.log(soma);
        } else {
            alert("por favor digite um número")
        }
        continuar = confirm("Deseja adicionar mais um número?")
    }
    alert("A soma dos números é:"^+ soma);
}

somarNumeros();