import { conexaoApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]")

async function criarVideo(event){
    event.preventDefault();
    const titulo = document.querySelector("[data-titulo]");
    const url = document.querySelector("[data-url]");
    const imagem = document.querySelector("[data-imagem]");

    const descricao = Math.floor(Math.random() * 100).toString();

    try{
        await conexaoApi.criaVideo(titulo.value, descricao, url.value, imagem.value);
        window.location.href = "../pages/envio-concluido.html";
    } catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit", event => criarVideo(event))
