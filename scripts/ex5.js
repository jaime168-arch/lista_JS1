function TransPi() {
    let continuar = true;

    while (continuar) {
        let entrada = prompt("Digite um número inteiro para transformar:");
        let numeroOriginal = parseInt(entrada);

        // Validação: verifica se o usuário digitou um número válido
        if (!isNaN(numeroOriginal)) {
            let resultado;
            let tipoOriginal;

            // Lógica de verificação e transformação
            if (numeroOriginal % 2 === 0) {
                // É PAR: somamos 1 para virar ÍMPAR
                tipoOriginal = "PAR";
                resultado = numeroOriginal + 1;
            } else {
                // É ÍMPAR: somamos 1 para virar PAR
                tipoOriginal = "ÍMPAR";
                resultado = numeroOriginal + 1;
            }

            // Exibição dos resultados no console e alert
            console.log(`Original: ${numeroOriginal} (${tipoOriginal}) -> Transformado: ${resultado}`);
            alert(`O número ${numeroOriginal} era ${tipoOriginal}.\nTransformado para: ${resultado}`);

        } else {
            alert("Por favor, digite um número inteiro válido.");
        }

        // Pergunta se o usuário quer tentar outro número (estilo seu primeiro código)
        continuar = confirm("Deseja transformar outro número?");
    }
}

