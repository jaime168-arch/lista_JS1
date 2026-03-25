function FolPag() {
    let continuar = true;

    while (continuar) {
        // Solicita os dados do funcionário
        let nome = prompt("Digite o nome do funcionário:");
        let salarioBruto = parseFloat(prompt(`Digite o salário bruto de ${nome}:`));

        // Validação para garantir que o salário é um número
        if (!isNaN(salarioBruto) && nome !== "") {
            
            // Cálculos
            const taxaINSS = 0.08; // Representa 8%
            let valorDesconto = salarioBruto * taxaINSS;
            let salarioLiquido = salarioBruto - valorDesconto;

            // Montando a mensagem de saída
            let resultado = `--- FOLHA DE PAGAMENTO ---\n\n` +
                            `Funcionário: ${nome}\n` +
                            `Salário Bruto: R$ ${salarioBruto.toFixed(2)}\n` +
                            `Desconto INSS (8%): R$ ${valorDesconto.toFixed(2)}\n` +
                            `Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`;

            // Exibição
            alert(resultado);
            console.log(resultado);

        } else {
            alert("Erro: Certifique-se de digitar um nome e um valor de salário válido.");
        }

        // Pergunta se deseja processar outro funcionário
        continuar = confirm("Deseja calcular a folha de outro funcionário?");
    }
}
