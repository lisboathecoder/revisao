let pikachuVida = 80; // Pontos de energia/vida do pikachu
let pikachuAtaque = 0; // Dano do Ataque do pikachu
let chamanderVida = 80; // Pontos de energia/vida do charmander
let chamanderAtaque = 0; // Dano do Ataque do charmander
let rodadas = 1; // Definição das rodadas


while (pikachuVida > 0 && chamanderVida > 0) { // Se a vida do pikachu ou do charmander for igual a 0, acaba o jogo
    //Rodadas
    console.log(`🥊 Rodada número: ${rodadas}`);
// Ataques dos pokemons     
    let chamanderAtaque = Math.floor(Math.random() *(22 - 8 + 1) + 8);
    let pikachuAtaque = Math.floor(Math.random() *(25 - 10 + 1) + 10);
// Batalha
    chamanderVida = chamanderVida - pikachuAtaque;
    pikachuVida = pikachuVida - chamanderAtaque;  
// Informações de ataque
    console.log(`Pikachu ⚡ deu ${pikachuAtaque} de dano`);
    console.log(`Charmander 🔥 deu ${chamanderAtaque} de dano`);
    // Separação
console.log("---------------------------------------------");
// Informações de energia/vida
    console.log(`Pikachu ⚡ tem ${pikachuVida} de vida restante`);
    console.log(`Charmander 🔥 tem ${chamanderVida} de vida restante`);
// Separação das informações do resultado
console.log("---------------------------------------------");
// Acrescenta 1 rodada a mais
rodadas++;
// Resultado da batalha
}
console.log(`💯 A batalha acabou com ${rodadas} rodadas!`) // Números de rodadas da batalha
if (pikachuVida <= 0 && chamanderVida <= 0) {
    console.log(`🫨 Deu empate!`);
} else if (pikachuVida > chamanderVida) {
    console.log(`🏆 Pikachu vence essa batalha pokemón!`)
} else {
    console.log(`🏆 Charmander vence essa batalha pokemón!`)
}

