function SisPre() {
    let continuar = true;

    // Menu textual para facilitar a visualização do usuário no prompt
    const menu = "--- TABELA DE PICOLÉS ---\n" +
                 "a) Chocolate - R$ 1,50\n" +
                 "b) Morango - R$ 2,50\n" +
                 "c) Creme - R$ 2,50\n" +
                 "d) Manga - R$ 3,20\n" +
                 "e) Melancia - R$ 3,40\n" +
                 "f) Vanilla Ice - R$ 3,00\n" +
                 "g) Céu Azul - R$ 3,60\n" +
                 "h) Brownie - R$ 4,00\n" +
                 "i) Hawaiano - R$ 5,00\n\n" +
                 "Digite o código (letra) do sabor:";

    while (continuar) {
        let codigo = prompt(menu).toLowerCase();
        let preco = 0;
        let sabor = "";

        // O switch verifica o código digitado e define sabor e preço
        switch (codigo) {
            case 'a': sabor = "Chocolate"; preco = 1.50; break;
            case 'b': sabor = "Morango"; preco = 2.50; break;
            case 'c': sabor = "Creme"; preco = 2.50; break;
            case 'd': sabor = "Manga"; preco = 3.20; break;
            case 'e': sabor = "Melancia"; preco = 3.40; break;
            case 'f': sabor = "Vanilla Ice"; preco = 3.00; break;
            case 'g': sabor = "Céu Azul"; preco = 3.60; break;
            case 'h': sabor = "Brownie"; preco = 4.00; break;
            case 'i': sabor = "Hawaiano"; preco = 5.00; break;
            default:
                alert("Código inválido! Escolha uma letra de 'a' até 'i'.");
                continue; // Volta para o início do loop sem perguntar se quer continuar
        }

        // Se o código for válido (chegou aqui), mostra o resultado
        const mensagem = `Sabor escolhido: ${sabor}\nPreço: R$ ${preco.toFixed(2)}`;
        alert(mensagem);
        console.log(mensagem);

        continuar = confirm("Deseja consultar outro sabor?");
    }
}

