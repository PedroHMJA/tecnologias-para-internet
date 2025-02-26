async function buscaCep(cep){
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    return resposta.json();
}