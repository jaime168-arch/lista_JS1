function VeriVol() {
    let continuar = true;

    while (continuar) {
        let letra = prompt("Digite uma letra do alfabeto:").toLowerCase();

        // Validação: verifica se o usuário digitou apenas uma letra e se não é um número
        if (letra.length === 1 && /[a-z]/i.test(letra)) {
            
            // Lógica de verificação
            if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
                console.log(`A letra "${letra}" é uma VOGAL.`);
                alert(`A letra "${letra}" é uma VOGAL.`);
            } else {
                console.log(`A letra "${letra}" é uma CONSOANTE.`);
                alert(`A letra "${letra}" é uma CONSOANTE.`);
            }

        } else {
            alert("Erro: Por favor, digite apenas UMA letra (A-Z).");
        }

        // Pergunta se o usuário quer testar outra letra
        continuar = confirm("Deseja verificar outra letra?");
    }
}
