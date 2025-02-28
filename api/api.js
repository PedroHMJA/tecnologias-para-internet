async function buscaCep(cep){
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let dados = await resposta.json()
    document.getElementsByClassName('conteudo')[0].innerHTML = `
        <h2>Endereço</h2>
        <p>REGIÃO: ${dados.regiao}</p>
        <p>ESTADO: ${dados.estado}</p>
        <p>UF: ${dados.uf}</p>
        <p>LOCALIDADE: ${dados.localidade}</p>
        <p>BAIRRO: ${dados.bairro}</p>
        <p>LOGRADOURO: ${dados.logradouro}</p>
        <p>CEP: ${dados.cep}</p>
    `;

    
}



