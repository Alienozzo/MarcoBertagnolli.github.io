//caricamento

function myFunction(){
  document.getElementById("caricamento").style.display = "block";
  document.getElementById("pagina").style.display = "none";
}

function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 3000);
}
  
function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}
  
onReady(function() {
  setVisible('.altro', true);
  setVisible('.caricamento', false);
});



//altro

function linguaggi(){
  if(document.getElementById("diagramma1").style.display == "block"){
    document.getElementById("diagramma1").style.display = "none";
  }else{
    document.getElementById("diagramma1").style.display = "block";
  }
  if(document.getElementById("diagramma2").style.display == "block"){
    document.getElementById("diagramma2").style.display = "none";
  }
}

function software(){
  if(document.getElementById("diagramma2").style.display == "block"){
    document.getElementById("diagramma2").style.display = "none";
  }else{
    document.getElementById("diagramma2").style.display = "block";
  }
  if(document.getElementById("diagramma1").style.display == "block"){
    document.getElementById("diagramma1").style.display = "none";
  }
}