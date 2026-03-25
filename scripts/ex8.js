function OpDuva() {
    let continuar = true;

    while (continuar) {
        // Solicita as duas variáveis inteiras
        let v1 = parseInt(prompt("Digite o valor da primeira variável (inteira):"));
        let v2 = parseInt(prompt("Digite o valor da segunda variável (inteira):"));

        // Validação simples
        if (!isNaN(v1) && !isNaN(v2)) {
            
            // a) A diferença entre as duas
            let diferenca = v1 - v2;

            // b) O dobro da primeira + o triplo da segunda
            // Cálculo: (2 * v1) + (3 * v2)
            let expressao = (2 * v1) + (3 * v2);

            // c) A multiplicação das duas
            let multiplicacao = v1 * v2;

            // Montando a mensagem de saída
            let resultado = `--- RESULTADOS PARA ${v1} E ${v2} ---\n\n` +
                            `a) Diferença (v1 - v2): ${diferenca}\n` +
                            `b) Dobro da 1ª + Triplo da 2ª: ${expressao}\n` +
                            `c) Multiplicação: ${multiplicacao}`;

            alert(resultado);
            console.log(resultado);

        } else {
            alert("Erro: Por favor, insira apenas números inteiros.");
        }

        continuar = confirm("Deseja fazer novos cálculos com outros números?");
    }
}
