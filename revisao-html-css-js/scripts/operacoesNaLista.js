function adicionaNaLista(){
    let element = document.getElementsByClassName('tarefas');
    let task = document.getElementById('tarefa').value;

    element[0].appendChild(document.createElement('li')).appendChild(document.createTextNode(task));
    document.getElementById('tarefa').value = "";
}

function removeDaLista(){
    let element = document.getElementsByClassName('tarefas');
    console.log(element[0]);
    element[0].removeChild(element[0].lastChild);
}