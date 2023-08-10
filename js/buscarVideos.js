import { conexaoApi } from "./conectaApi.js";
import criaCard from "./listaVideos.js";

const lista = document.querySelector("[data-lista]");
const campoPesquisa = document.querySelector("[data-pesquisa]")

async function buscarVideos(evento){
    evento.preventDefault();
    const dadosPesquisa = campoPesquisa.value;
    const videosBuscados = await conexaoApi.buscaVideo(dadosPesquisa);

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    
    videosBuscados.forEach(element => lista.appendChild(criaCard(element.titulo, element.descricao, element.url, element.imagem)))

    if(videosBuscados.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Busca não encontrada, não existem videos com esse termo</h2>`
    }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", evento => buscarVideos(evento))
campoPesquisa.addEventListener("keypress", evento => {
    if (evento.key === "Enter") {
        buscarVideos(evento);
    }
})


