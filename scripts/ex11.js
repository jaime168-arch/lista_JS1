function FolPagva() {
    let continuar = true;

    while (continuar) {
        let salarioBruto = parseFloat(prompt("Digite o valor do salário bruto:"));

        if (!isNaN(salarioBruto) && salarioBruto > 0) {
            let taxaPercentual = 0;
            let taxaDecimal = 0;

            // Lógica das Faixas Salariais
            if (salarioBruto <= 1000) {
                taxaPercentual = 8;
                taxaDecimal = 0.08;
            } 
            else if (salarioBruto <= 1500) {
                taxaPercentual = 8.5;
                taxaDecimal = 0.085;
            } 
            else {
                taxaPercentual = 9;
                taxaDecimal = 0.09;
            }

            // Cálculos finais
            let valorDesconto = salarioBruto * taxaDecimal;
            let salarioLiquido = salarioBruto - valorDesconto;

            // Montando o relatório
            let relatorio = `--- DETALHAMENTO DA FOLHA ---\n\n` +
                            `Salário Informado: R$ ${salarioBruto.toFixed(2)}\n` +
                            `Taxa Aplicada: ${taxaPercentual}%\n` +
                            `Valor do Desconto: R$ ${valorDesconto.toFixed(2)}\n` +
                            `Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`;

            alert(relatorio);
            console.log(relatorio);

        } else {
            alert("Erro: Por favor, digite um valor de salário válido.");
        }

        continuar = confirm("Deseja calcular outro salário?");
    }
}

