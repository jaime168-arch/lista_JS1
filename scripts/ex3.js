function BalancoFinan() {
    let ganhoBrutoAnual = 0;
    let gastoAnual = 0;
    let mes = 1;

    // O loop rodará enquanto o mês for menor ou igual a 12
    while (mes <= 12) {
        alert(`--- Lançamento do Mês ${mes} ---`);

        let ganhoMes = parseFloat(prompt(`Digite o ganho bruto do mês ${mes}:`));
        let gastoMes = parseFloat(prompt(`Digite o gasto do mês ${mes}:`));

        // Validação básica para garantir que são números
        if (!isNaN(ganhoMes) && !isNaN(gastoMes)) {
            ganhoBrutoAnual += ganhoMes;
            gastoAnual += gastoMes;
            
            console.log(`Mês ${mes} registrado. Subtotal Ganho: ${ganhoBrutoAnual}`);
            mes++; // Passa para o próximo mês apenas se os dados forem válidos
        } else {
            alert("Entrada inválida! Por favor, digite números válidos para os ganhos e gastos.");
        }
    }

    const saldoFinal = ganhoBrutoAnual - gastoAnual;
    let status = "";

    // Lógica de Lucro ou Prejuízo
    if (saldoFinal > 0) {
        status = "LUCRO";
    } else if (saldoFinal < 0) {
        status = "PREJUÍZO";
    } else {
        status = "EMPATE (Saldo Zero)";
    }

    // Exibição do balanço final
    alert(
        `--- BALANÇO ANUAL MAWER ---\n\n` +
        `Ganho Bruto Anual: R$ ${ganhoBrutoAnual.toFixed(2)}\n` +
        `Gasto Anual: R$ ${gastoAnual.toFixed(2)}\n` +
        `Saldo Financeiro: R$ ${saldoFinal.toFixed(2)}\n` +
        `Resultado: ${status}`
    );
}