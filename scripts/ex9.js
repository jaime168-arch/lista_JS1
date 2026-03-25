function OpDunum() {
    let continuar = true;

    while (continuar) {
        // Solicita os dois números inteiros
        let n1 = parseInt(prompt("Digite o primeiro número inteiro:"));
        let n2 = parseInt(prompt("Digite o segundo número inteiro:"));

        // Validação para garantir que são números válidos
        if (!isNaN(n1) && !isNaN(n2)) {
            
            let resultado = "";

            // Lógica de comparação para ordem decrescente
            if (n1 > n2) {
                resultado = `Ordem decrescente: ${n1}, ${n2}`;
            } else if (n2 > n1) {
                resultado = `Ordem decrescente: ${n2}, ${n1}`;
            } else {
                resultado = `Os números são iguais: ${n1} e ${n2}`;
            }

            // Exibição dos resultados
            console.log(resultado);
            alert(resultado);

        } else {
            alert("Erro: Por favor, insira números inteiros válidos.");
        }

        continuar = confirm("Deseja comparar outros dois números?");
    }
}

