
  // let form = document.getElementsByClassName('form')[0];
  // let checkboxes = document.createElement('div');
  // checkboxes.classList.add('checkboxes');
  // form.appendChild(checkboxes);
  // let check = document.createElement('input');
  // let checkat = document.createAttribute('type');
  // checkat.value = "checkbox";
  // check.setAttributeNode(checkat);
  // checkboxes.appendChild(check);
  // check.classList.add('checkbox');
  // let nome = document.createElement('input');
  // let nomeat = document.createAttribute('type');
  // nomeat.value = "name";
  // nome.classList.add('nome');
  // nome.setAttributeNode(nomeat);
  // nomeat = document.createAttribute('placeholder');
  // nomeat.value = "Digite sua tarefa";
  // nome.setAttributeNode(nomeat);
  // checkboxes.appendChild(nome);
  
  let tarefas = document.getElementById('tarefas');
  let nome = document.getElementById('nome');
  let checkbox = document.getElementById('checkbox');
  let quantidade = document.getElementById('quantidade');
  console.log(check = []);
  let divplus = 0;
  function quantidadet() {
    // pega as sequências e transforma em número
    quantidade.innerHTML = `<div id="quantidades">${check.length}</div>`;
  }
  function adicionar() {
    function checkbox() {
   divplus = divplus + 1;
    if ( nome.value.length == 0) {
      window.alert('Você precisa fazer digitar algo e checar para poder adicionar');
    }
    else {

  tarefas.innerHTML = tarefas.innerHTML + `<div class="minhastarefas" id="minhastarefas${divplus}"> <span>${nome.value}</span>
 <label> <input class="checkboxr" class="mudarcor" id="checkboxrr${divplus}" type="checkbox"></label></div>` 
  nome.value = "";   

   
 

      function DoneButton() {
    // o push salvo no array como índice
        let checkboxr = document.getElementById(`checkboxrr${divplus}`);
    let input = document.getElementById(`minhastarefas${divplus}`);
    check.push(checkboxr)
    if (checkboxr.checked == true) {
      input.classList.add('cor');
}

}
DoneButton();
}
}
checkbox();
// .checked sempre retorna verdadeiro ou falso



    }

