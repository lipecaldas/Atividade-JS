function cadastro(){
  
  var funcao = {
    nome: document.getElementById("nome").value,
    sobrenome: document.getElementById("sobrenome").value,
    salario: document.getElementById("salario").value
    
  };
  
  if(funcao['nome'] !== "" && funcao ['sobrenome'] !== undefined && funcao ['salario'] !== undefined){
        alert('Cadastro realizado com sucesso!');
      }else{
        alert('Erro ao cadastrar');  
      }
  
}

console.log(funcao);