function string() {
  var texto = document.getElementById('texto').value;
  var quatro = texto.substring(0, 4);
  document.getElementById('result').innerHTML = quatro;
}