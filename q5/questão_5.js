var Empregado = function (nome, sobrenome, salarioMensal){
  
  this.nome1 = nome;
  this.sobrenome1 = sobrenome;
  this.salarioMensal1 = salarioMensal;
  
  this.calcularSalarioAno = function(){
    console.log ("O Salario anual e "+ (this.salarioMensal1*12) );
     
   
  this.dadosEmpregado = function (){
      console.log(this.nome1+ "" +this.sobrenome1+", salarioMensal: "+this.salarioMensal1);
  };
  };
};
  
  var nomeEmpregado = prompt ("Insira seu nome: ");
  var sobreNomeEmpregado = prompt ("Insira seu sobrenome: ");
  var salario = prompt ("Insira seu Salario: ");
  var funcionario = new Empregado (nomeEmpregado, sobreNomeEmpregado, salario);

  funcionario.calcularSalarioAno ();
  funcionario.dadosEmpregado ();




