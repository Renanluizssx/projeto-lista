document.addEventListener("DOMContentLoaded", pegarTarefa);
const formulario = document.getElementById("form");
formulario.addEventListener("submit", adicionarTarefa);
const tarefas = document.getElementById("tarefas");

const getItem = (chave) => JSON.parse(localStorage.getItem(chave));
const setItem = (chave, valor) =>
  localStorage.setItem(chave, JSON.stringify(valor));

const printarTarefa = (tarefa) => {
  const index = document.getElementsByClassName("minhas-tarefas").length;

  if (tarefa === "") {
    window.alert("Você precisa adicionar uma tarefa");
    return null;
  }

  const tarefastring = `<div class="minhas-tarefas" id="minhas-tarefas-${index}">
      <span>${tarefa}</span>
      <input type="checkbox" class="checkbox" onclick="concluirTarefa(${index})" id="checkbox-${index}" >
      <button id="excluir" class="excluir" onclick="excluirTarefa(${index})">Excluir</button>
      </div>`;

  tarefas.innerHTML += tarefastring;
};
function adicionarTarefa(evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome");

  printarTarefa(nome.value);

  const local = getItem("local");

  if (local === null) {
    setItem("local", [nome.value]);
    nome.value = "";
  }

  setItem("local", [...local, nome.value]);
  nome.value = "";
}
function concluirTarefa(index) {
  const fundocheckbox = document.getElementById(`minhas-tarefas-${index}`);
  const checkbox = document.getElementById(`checkbox-${index}`);
  const audio = new Audio("audio/Áudio.mp3");
  if (checkbox.checked) {
    fundocheckbox.classList.add("cor");
    audio.play();
  } else {
    fundocheckbox.classList.remove("cor");
  }
}
function pegarTarefa() {
  const local = getItem("local");
  if (local === null) {
    return null;
  }
  local.forEach((tarefa) => printarTarefa(tarefa));
}
function excluirTarefa(excluir) {
  const local = getItem("local");
  local.splice(excluir, 1);
  setItem("local", local);
  location.reload();
}
