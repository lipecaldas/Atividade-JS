var string = ['Salvador','São Paulo','Rio de Janeiro','Tocantins'];

var x;
var palavrasS = function(){
    for(  x = 0 ; x < string.length;x++){
        var valor = string[x];
          if(valor[0] == 'S'){
            console.log(valor);
                      
        }
    }
};

palavrasS(); 