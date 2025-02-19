function validaCampos(){
    let user = document.getElementById("inp1").value;
    let password = document.getElementById("inp2").value;


    if(user == "" || password == ""){
        alert("Por favor, preencha todos os campos!");
    }
    else{
        alert("Formulário enviado com sucesso!");
    }
}