async function buscaPersonagem(){

    let personagem = document.getElementById("nomePersonagem").value;
    let resposta = await fetch(`https://rickandmortyapi.com/api/character/?name=${personagem}`)
    let dados = await resposta.json()
    personagemFiltrado = dados.results[0]
    document.getElementsByClassName('conteudo')[0].innerHTML = `
        <h2>Personagem: ${personagemFiltrado.name}</h2>
        <p>Especie: ${personagemFiltrado.species}</p>
        <p>Genero: ${personagemFiltrado.gender}</p>
        <p>Origem: ${personagemFiltrado.origin}</p>
        <img src="${personagemFiltrado.image}"/>
    `;
    document.getElementById('nomePersonagem').value = "";
}