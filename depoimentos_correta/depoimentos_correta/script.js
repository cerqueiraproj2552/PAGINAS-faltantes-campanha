(function(){'use strict';
var b=document.getElementById('menuBotao'),l=document.getElementById('menuLista');
if(b&&l){b.addEventListener('click',function(){var o=l.classList.toggle('aberto');b.setAttribute('aria-expanded',o?'true':'false')})}
})();
