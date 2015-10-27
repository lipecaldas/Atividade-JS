function style(elemento,nome){
var valor = (arguments[2])
    return valor;
}
console.log(style('Nada','ok','30px'));
function assert(resultado,funcao_teste){
    (resultado === funcao_teste)?console.log('Teste ok'):console.log('Teste Erro');
}

assert('30px',style('div','font-size','30px'));