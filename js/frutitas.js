function agregarFruta(){
  var entrada = document.getElementById('frutitas').value;
  var node = document.createElement('LI');
  var textnode = document.createTextNode(entrada);
  node.appendChild(textnode);
  document.getElementById('miLista').appendChild(node);
}
