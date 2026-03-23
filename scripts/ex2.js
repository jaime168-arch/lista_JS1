function NasaFoguete() {

    // Definimos o tempo inicial
    let segundos = 10;
    
    // Criamos o intervalo que roda a cada 1 segundo (1000ms)
    const contagem = setInterval(),{

        console.log(segundos); // Exibe o número atual no console
      
        segundos--; // Subtrai 1 do valor
      
        // Quando chegar a zero, paramos o intervalo
        if (segundos < 0) 
          clearInterval(contagem);
          console.log("Tempo esgotado!");
    } 
}
  