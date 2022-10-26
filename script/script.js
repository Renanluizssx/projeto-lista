// const usasse quando uma variável não vai receber novos valores
let tarefas = document.getElementById('tarefas');
let nome = document.getElementById('nome');
let divquantidade = document.getElementById('quantidades');
divplus = 0;
let apagar = 0;
let check = [];
controle = 0;
const getBanco = () => JSON.parse(localStorage.getItem('todo')) ?? [];
const setBanco = (banco) => localStorage.setItem('todo', JSON.stringify(banco))
// return pode ser usado somente uma vez dentro de uma função;
  const quantidade = (c) => {
        if (c == 0) {
          return divquantidade.innerHTML = `<div class="quantidade">${c}</div>`;
        }
        else {
        
        return divquantidade.innerHTML = `<div class="quantidade">${check.length}</div>`;
      }
  }
function ConcluirTarefa(divplus) {
  console.log(divplus)
  const fundocheckbox = document.getElementById(`minhas-tarefas-${divplus}`);
  const checkbox = document.getElementById(`checkbox-${divplus}`);
  const audio = new Audio('audio/Áudio.mp3')
  //console.log(divplus)
  if (checkbox.checked) {
    fundocheckbox.classList.add("cor");
    audio.play();
                

  }
  else {
    fundocheckbox.classList.remove("cor");
  }
  

}
// função pode ser
function AdicionarTarefa() {
  // boa prática não usar uma função dentro da outra
  
  if (nome.value == "") {
    window.alert("Você precisa adicionar uma tarefa");
    return null;
    
    // a partir do momento que usamos um return, abaixo morre;
  }
  
  
divquantidade.innerHTML = ``;
apagar++;
divplus++; 
  


let tarefa = `<div class="minhas-tarefas" id="minhas-tarefas-${divplus}">
                <span>${nome.value}</span>
                <input class="checkbox" onclick="ConcluirTarefa(${divplus})" id="checkbox-${divplus}" type="checkbox">
            </div>` 
            check.push(tarefa)
            



//tarefas.innerHTML +=tarefa
/*
const addtarefa = () => {
  const banco = getBanco();
  banco.push({tarefa: nome.value})
  setBanco(banco)
  const banco2 = getBanco();
  banco2.forEach(() => {
     AdicionarTarefa(nome.value)
  })
addtarefa();
*/
}     

  
 // localStorage.setItem("tarefa", check[controle])
  //controle++;
 //tarefas.innerHTML = localStorage.getItem("tarefa")


localStorage.setItem("minhastarefas",`<div class="minhas-tarefas" id="minhas-tarefas-${divplus}">
<span>comer</span>
<input class="checkbox" onclick="ConcluirTarefa()" id="checkbox-${divplus}" type="checkbox">
</div>`)
controle++;
tarefas.innerHTML += localStorage.getItem("minhastarefas")


//localStorage.tarefas = "check";
//controle++
//tarefas.innerHTML += localStorage.tarefas;


  const excluir = () =>  {
    tarefas.innerHTML = ``;
    divplus = 0;
    check.splice(0, apagar);
    apagar = 0;
    return quantidade(0);
  }

