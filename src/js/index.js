/*
CLICAR NO POKÉMON DA LISTA
SUMIR POKÉMON ATUAL
APARECER POKÉMON SELECIONADO.

USAREMOS DOIS ELEMENTOS...
1 - Listagem
2 - Cartão Pokemon

Precisamos criar duas variáveis no JS para trabalhar
com os elementos da tela

Vamos precisar trabalhar com um evento de clique
feito pelo usuário na listagem de pokémons

----------------------######------------------------
RESUMO:

- Remover classe aberto do cartão aberto.
- Ao clicar em pokémon da listagem pegamos o id 
desse pokémon para saber qual cartão mostrar.
- Remover a classe ativo que marca o pokémon selecionado.
- Adicionar a classe ativo no novo pokémon selecionado.
*/

const pokemonLISTA = document.querySelectorAll('.pokemon')
const pokemonCARTAO = document.querySelectorAll('.cartao-pokemon')

pokemonLISTA.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const pokemonListaAtivo = document.querySelector('.ativo')
        pokemonListaAtivo.classList.remove('ativo')

        const pokemonIdSelecao = pokemon.attributes.id.value
        const pokemonCartaoEscolhido = 'cartao' + pokemonIdSelecao

        const pokemonAbrirCartao = document.getElementById(pokemonCartaoEscolhido)
        pokemonAbrirCartao.classList.add('aberto')

        const pokemonAtivoLista = document.getElementById(pokemonIdSelecao)
        pokemonAtivoLista.classList.add('ativo')
    })
})