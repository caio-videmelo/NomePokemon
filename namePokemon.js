// Definição da função combinandoNomesPokemons que recebe um parâmetro chamado palavra
function combinandoNomesPokemons(palavra) {
    // Concatena a palavra recebida com o sufixo "saur"
    let palavraPokemon = palavra + "saur";
    
    // Retorna a palavra pokemon completa
    return palavraPokemon;
}

// Entrada da palavra usando a função gets():
var nomeEntrada = gets();

// Chamando a função combinandoNomesPokemons com o nome pokemon informado e armazenando o resultado na variável palavraGerada
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada
print(palavraGerada);
