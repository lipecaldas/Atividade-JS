var mover = function (){
  
  var movimento = '100px';
  
  document.getElementById("box").style.top = (movimento);
  document.getElementByID("box").style.left = (movimento);

};

  window.setInterval (mover, 1000);