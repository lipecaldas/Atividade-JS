var listaTarefas = ['', ''];

function novaTarefa() {
	document.getElementById('corpo').innerHTML = '<legend>Lista de tarefas</legend><input type=text id="texto1" placeholder="Tarefa 1"><br><input type=text id="texto2" placeholder="Tarefa 2"><br><input type=submit value="Incluir" onclick="inserirTarefa();">';
}

function inserirTarefa() {
	var validar1 = document.getElementById('texto1').value;
	if(validar1 == ''){
		alert('Preencha o campo da tarefa 1!');
	}
	else{
		listaTarefas[0] = document.getElementById('texto1').value;
	}
	var validar2 = document.getElementById('texto2').value;
	if(validar2 == ''){
		alert('Preencha o campo da tarefa 2!');
	}
	else{
		listaTarefas[1] = document.getElementById('texto2').value;
	}
	alert('Você inseriu as tarefas com sucesso!');
	document.getElementById('corpo').innerHTML = '<legend>Lista de tarefas</legend><button onclick="novaTarefa();">Inserir nova tarefa</button> <button onclick="printTarefa();">Exibir tarefas</button>';
}

function printTarefa() {
	document.getElementById('corpo').innerHTML = '<legend>Lista de tarefas</legend><ul><li>' + listaTarefas[0] + '</li><li>' + listaTarefas[1] + '</li></ul>';
}