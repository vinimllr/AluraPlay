async function listarVideos(){
    const res = await fetch("http://localhost:3000/videos");
    const resConvertida = await res.json();

    return resConvertida;
}

async function buscaVideo(dadosDaBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${dadosDaBusca}`);
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo")
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conexaoApi = {
    listarVideos,
    criaVideo,
    buscaVideo
}