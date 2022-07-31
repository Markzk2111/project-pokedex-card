/* objetivo 1 - quando clicar na seta de avançar temos que
mostrar o proximo cartao da lista 
    - passo 1 - dar um jeito de pegar o elemento html  da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuario na seta avançar 
    - passo 3 - fazer aparecer o proximo cartão da lista 
    - passo 4 - buscar o cartão que esta selecionado e esconder 

   objetivo 2 - quando clicarmos na seta voltar temos que mostrar o cartão anterior da lista 
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar 
    - passo 2 - dar um jeito de identificar o clique do usuario na seta voltar 
    - passo 3 - fazer aparecer o cartão anterior da lista 
    - passo 4- buscar o cartão que esta selecionado e esconder 
*/
//objetivo 1
// passo 1
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
//passo 3
const cartoes = document.querySelectorAll(".cartao");
//
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
} 

function mostrarCartao(indiceCartao){
    cartoes[cartaoAtual].classList.add("selecionado");
}

//passo 2
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

  cartaoAtual++;
  
  mostrarCartao(cartaoAtual);
  //passo 4

  
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  
mostrarCartao(cartaoAtual);
  //passo 4
});
