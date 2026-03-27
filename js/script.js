// Recupera as disciplinas salvas no navegador
let listaDisciplinas = JSON.parse(localStorage.getItem("disciplinas")) || [];

const inputBusca = document.getElementById("searchInput");
const form = document.getElementById("disciplineForm");
const list = document.getElementById("disciplineList");

// Salva os dados no LocalStorage
function salvarDados() {
    localStorage.setItem("disciplinas", JSON.stringify(listaDisciplinas));
}

// Função responsável por atualizar a interface
function renderizarDisciplinas() {
    list.innerHTML = "";

    const termoBusca = inputBusca.value.toLowerCase().trim();

    const disciplinasFiltradas = listaDisciplinas.filter(function (disciplina) {
        return disciplina.nome.toLowerCase().includes(termoBusca);
    });

    if (listaDisciplinas.length === 0) {
        list.innerHTML = "<p class='empty'>Nenhuma disciplina cadastrada.</p>";
        return;
    }

    if (disciplinasFiltradas.length === 0) {
        list.innerHTML = "<p class='empty'>Nenhuma disciplina encontrada.</p>";
        return;
    }

    disciplinasFiltradas.forEach(function (disciplina) {
        const percentual = ((disciplina.estudado / disciplina.cargaHoraria) * 100).toFixed(1);

        // Pega o índice original da disciplina dentro da lista completa
        const indiceOriginal = listaDisciplinas.indexOf(disciplina);

        const div = document.createElement("div");
        div.className = "disciplina";

        div.innerHTML = `
            <h3>${disciplina.nome}</h3>
            <p><strong>Professor:</strong> ${disciplina.professor}</p>
            <p><strong>Área:</strong> ${disciplina.area}</p>
            <p><strong>Horas estudadas:</strong> ${disciplina.estudado} / ${disciplina.cargaHoraria}</p>

            <div class="progress">
                <div class="progress-bar" style="width:${percentual}%">${percentual}%</div>
            </div>

            <input type="number" placeholder="Adicionar horas" id="horas-${indiceOriginal}" min="1">

            <div class="actions">
                <button onclick="adicionarHoras(${indiceOriginal})">Registrar Horas</button>
                <button onclick="editarDisciplina(${indiceOriginal})">Editar</button>
                <button onclick="excluirDisciplina(${indiceOriginal})">Excluir</button>
            </div>
        `;

        list.appendChild(div);
    });
}

// Evento de cadastro
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const professor = document.getElementById("teacher").value.trim();
    const cargaHoraria = parseFloat(document.getElementById("workload").value);
    const area = document.getElementById("area").value;

    if (!nome || !professor || !cargaHoraria || !area) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    listaDisciplinas.push({
        nome,
        professor,
        cargaHoraria,
        area,
        estudado: 0
    });

    salvarDados();
    form.reset();
    renderizarDisciplinas();
});

// Adiciona horas de estudo
function adicionarHoras(index) {
    const input = document.getElementById(`horas-${index}`);
    const horas = parseFloat(input.value);

    if (!horas || horas <= 0) {
        alert("Informe um valor válido!");
        return;
    }

    listaDisciplinas[index].estudado += horas;
    salvarDados();
    renderizarDisciplinas();
}

// Edita disciplina
function editarDisciplina(index) {
    const disciplina = listaDisciplinas[index];

    document.getElementById("name").value = disciplina.nome;
    document.getElementById("teacher").value = disciplina.professor;
    document.getElementById("workload").value = disciplina.cargaHoraria;
    document.getElementById("area").value = disciplina.area;

    excluirDisciplina(index);
}

// Exclui disciplina
function excluirDisciplina(index) {
    listaDisciplinas.splice(index, 1);
    salvarDados();
    renderizarDisciplinas();
}

// Busca disciplina
document.addEventListener("DOMContentLoaded", function () {
    const inputBusca = document.getElementById("searchInput");

    inputBusca.addEventListener("input", function () {
        renderizarDisciplinas();
    });
});

// Inicialização do sistema
renderizarDisciplinas();
