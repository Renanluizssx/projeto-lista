// const usasse quando uma variável não vai receber novos valores
let tarefas = document.getElementById('tarefas');
let nome = document.getElementById('nome');
let divquantidade = document.getElementById('quantidades');
let divplus = 0;
let apagar = 0;
tarefasquan = [];

// return pode ser usado somente uma vez dentro de uma função;
  const quantidade = (c) => {
        if (c == 0) {
          return divquantidade.innerHTML = `<div class="quantidade">${c}</div>`
        }
        else {
        return divquantidade.innerHTML = `<div class="quantidade">${tarefasquan.length}</div>`;
      }
  }
function ConcluirTarefa() {
  const fundocheckbox = document.getElementById(`minhas-tarefas-${divplus}`)
  const checkbox = document.getElementById(`checkbox-${divplus}`)
  if (checkbox.checked) {
    fundocheckbox.classList.add("cor");
  }
  else {
    fundocheckbox.classList.remove("cor");
  }
  

}
function AdicionarTarefa() {
  
  // boa prática não usar uma função dentro da outra
  
  if (nome.value == "") {
    window.alert("Você precisa adicionar uma tarefa");
    return null;
    
    // a partir do momento que usamos um return, abaixo morre;
  }

  


tarefa = `<div class="minhas-tarefas" id="minhas-tarefas-${divplus}">
                <span>${nome.value}</span>
                <input class="checkbox" onclick="ConcluirTarefa()" id="checkbox-${divplus}" type="checkbox">
            </div>` 
            tarefasquan.push(tarefa)
tarefas.innerHTML += tarefa;

nome.value = ""; 
apagar++;
divplus++; 
}

  const excluir = () =>  {
    tarefas.innerHTML = ``;
    divplus = 0;
   tarefasquan.splice(0, apagar)
    return quantidade(0)
  }
   /*
localStorage.tarefas = localStorage.tarefas+check[controle];
controle = controle + 1;
tarefas.innerHTML = tarefas.innerHTML + localStorage.tarefas;
*/