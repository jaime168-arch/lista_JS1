function OrdVal() {
    let numeros = [];
    let contador = 1;

    // O loop rodará até coletar 4 números
    while (contador <= 4) {
        let entrada = prompt(`Digite o ${contador}º número inteiro:`);
        let numero = parseInt(entrada);

        // Validação: verifica se é um número inteiro
        if (!isNaN(numero)) {
            numeros.push(numero); // Adiciona o número na lista
            contador++;           // Só avança o contador se for um número válido
        } else {
            alert("Por favor, digite apenas números inteiros válidos.");
        }
    }

    // Ordenação Decrescente:
    // A função (a, b) => b - a subtrai o primeiro do segundo, 
    // resultando na ordem do maior para o menor.
    numeros.sort((a, b) => b - a);

    // Exibição do resultado
    alert(
        "--- NÚMEROS EM ORDEM DECRESCENTE ---\n\n" +
        numeros.join(" > ")
    );
    
    console.log("Lista ordenada:", numeros);
}

