document.addEventListener("DOMContentLoaded", pegarTarefa)
let formulario = document.getElementById("form");
formulario.addEventListener("submit", adicionarTarefa)
let tarefas = document.getElementById('tarefas');

let getItem = (chave) => JSON.parse(localStorage.getItem(chave));
let setItem = (chave, valor) => localStorage.setItem(chave, JSON.stringify(valor));
  
let printarTarefa = (valor) => {
  
  controle = document.getElementsByClassName("minhas-tarefas").length
  console.log(document.getElementsByClassName("minhas-tarefas"))
  if (valor === "") {
     window.alert("Você precisa adicionar uma tarefa");
    return null; 
   }
   
  let tarefa = 
      `<div class="minhas-tarefas" id="minhas-tarefas-${controle}">
      <span>${valor}</span>
      <input class="checkbox" onclick="ConcluirTarefa(${controle})" id="checkbox-${controle}" type="checkbox">
      <img src="../imagens/trash.png" id="excluir" class="excluir" onclick="ExcluirTarefa(${controle})">
      </div>` 
    
    tarefas.innerHTML +=tarefa;
    
    
}
function adicionarTarefa(event) {
  
  console.log(event)
  event.preventDefault()
  let nome = document.getElementById('nome');
  
  printarTarefa(nome.value)
  
  
  local = getItem("local");
  
  
  if (local === null) {
    return setItem("local", [nome.value])
  }
  return setItem("local", [...local, nome.value])
  
}
  function ConcluirTarefa(controle) {
    const fundocheckbox = document.getElementById(`minhas-tarefas-${controle}`);
    const checkbox = document.getElementById(`checkbox-${controle}`);
    const audio = new Audio('audio/Áudio.mp3')
    if (checkbox.checked) {
      fundocheckbox.classList.add("cor");
      audio.play();
                  
  
    }
    else {
      fundocheckbox.classList.remove("cor");
    }
    
  
  }
  function pegarTarefa () {
    
    let local = getItem("local");
    if (local === null) {
      return null
    }
    local.forEach((tarefa) => printarTarefa(tarefa));

  }
  function ExcluirTarefa(excluir) {

    local = getItem("local");
    local.splice(excluir, 1);
    setItem("local", local);
    location.reload()
  
}



