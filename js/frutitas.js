function agregarFruta(){
  var entrada = document.getElementById('frutitas').value;
  var node = document.createElement('LI');
  var textnode = document.createTextNode(entrada);
  node.appendChild(textnode);
  document.getElementById('miLista').appendChild(node);
}
function removeLi() {
  var lista = document.getElementById("miLista");
  var elemento= document.getElementsByTagName("li");
  var i = elemento.length -1;
  lista.removeChild(elemento[i]);
  }
