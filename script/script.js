// const usasse quando uma variável não vai receber novos valores
//GetElementsByClassname sempre vai pegar uma coleção
//ctrl d altera tudo
// crtl shift l pega tudo
//f2 altera tudo 
//localStorage não atende o array
//transforme array por json pra ele identificar como se fosse um array
// boa prática não usar uma função dentro da outra
// a partir do momento que usamos um return, abaixo morre;
// return pode ser usado somente uma vez dentro de uma função;
//tentei usar o required e não funcionou
// a partir do momento que colocou o event ele travou
//localstorage não reconhece array
document.addEventListener("DOMContentLoaded", pegartarefa)
let formulario = document.getElementById("form");
formulario.addEventListener("submit", AdicionarTarefa)
let tarefas = document.getElementById('tarefas');
let nome = document.getElementById('nome');
let divquantidade = document.getElementById('quantidades');
let apagar = 0;
let check = [];
let getItem = (chave) => JSON.parse(localStorage.getItem(chave));

let setItem = (chave, valor) =>
  localStorage.setItem(chave, JSON.stringify(valor));
let printartarefa = (valor) => {
  controle = document.getElementsByClassName("minhas-tarefas").length + 1
  if (valor == "") {
     window.alert("Você precisa adicionar uma tarefa");
    return null; 
   }
 divquantidade.innerHTML = ``;
 apagar++;
  let tarefa = 
      `<div class="minhas-tarefas" id="minhas-tarefas-${controle}">
      <span>${valor}</span>
      <input class="checkbox" onclick="ConcluirTarefa(${controle})" id="checkbox-${controle}" type="checkbox">
      </div>` 

  // na primeira vez que ele pegar ele vai retornar null
  //console.log(local);  
    
    check.push(tarefa)   
    //valor = "";
    tarefas.innerHTML +=tarefa

}
function AdicionarTarefa(event) {
  event.preventDefault()
  printartarefa(nome.value)
  local = getItem("local");
  if (local === null) {
    return setItem("local", [nome.value])
  }
  
  return setItem("local", [...local, nome.value])
  

}
  const quantidade = (c) => {
        if (c == 0) {
          return divquantidade.innerHTML = `<div class="quantidade">${c}</div>`;
        }
        else {
        
        return divquantidade.innerHTML = `<div class="quantidade">${check.length}</div>`;
      }
  }


  const excluir = () =>  {
    tarefas.innerHTML = ``;
    check.splice(0, apagar);
    apagar = 0;
    return quantidade(0);
  }
  function ConcluirTarefa(controle) {
    const fundocheckbox = document.getElementById(`minhas-tarefas-${controle}`);
    const checkbox = document.getElementById(`checkbox-${controle}`);
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
  function pegartarefa () {

    let localvalor = JSON.parse(localStorage.getItem("local"));
    console.log(localvalor)
    if (localvalor === null) {
      return null
    }
    localvalor.forEach((tarefa) => {
      printartarefa(tarefa);
    });
    
  }



