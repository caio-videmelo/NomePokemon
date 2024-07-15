# NomePokemon
## Descrição

Imagine um universo onde você é um Mestre Pokémon com o poder de criar novas criaturas através da combinação de nomes. Seu algoritmo é a chave para dar vida a esses seres incríveis. Você receberá uma primeira parte do nome de um Pokémon e sua tarefa é completá-la com o sufixo mágico adequado, revelando o nome completo do Pokémon.

## Tarefa: 
Sua missão é criar uma função extraordinária chamada combinarNomePokemon. Essa função possui um toque mágico que transforma uma entrada simples em algo verdadeiramente especial.

## Entrada
A entrada consistirá em uma única string representando a primeira parte do nome de um Pokémon.

## Saída
A função deve retornar uma nova string que é a combinação da parte inicial(Préfixo) do nome do Pokémon com o sufixo final do nome, formando um nome de Pokémon completo.

## Explicação do Código:

### Definição da Função:

function combinandoNomesPokemons(palavra) { ... }: Define a função combinandoNomesPokemons que recebe um parâmetro chamado palavra. Esta função será responsável por combinar a palavra com o sufixo "saur" para formar o nome completo do Pokémon.

### Concatenação da Palavra:

let palavraPokemon = palavra + "saur";: Cria uma nova variável palavraPokemon que armazena a concatenação da palavra recebida como parâmetro com a string "saur".

### Retorno da Palavra Pokémon:

return palavraPokemon;: Retorna a variável palavraPokemon, que contém o nome completo do Pokémon formado pela combinação da parte inicial do nome com o sufixo "saur".

### Entrada e Saída de Dados:

var nomeEntrada = gets();: Lê a entrada do usuário usando a função gets(), que é comum em ambientes de desafios de programação como a DIO.

var palavraGerada = combinandoNomesPokemons(nomeEntrada);: Chama a função combinandoNomesPokemons com a entrada do usuário (nomeEntrada) e armazena o resultado na variável palavraGerada.

print(palavraGerada);: Imprime na saída o resultado gerado pela função, que é o nome completo do Pokémon.

### Funcionamento:

Este código é projetado para receber a primeira parte do nome de um Pokémon como entrada, adicionar o sufixo "saur" a essa parte inicial e imprimir o nome completo do Pokémon formado. A função combinandoNomesPokemons realiza a concatenação necessária e retorna o resultado esperado.

![PrintDesafio5](https://github.com/user-attachments/assets/7de567c2-ea17-42d4-9662-0d377a81749d)
