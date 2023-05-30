var listaMensagens= [];

function adicionarMensagem(apelido,mensagem){
  listaMensagens.push({
    "apelido": apelido,
    "mensagem": mensagem
  })
}

function formatarMensagens(){
  var html='';
  
for(i=0;i<listaMensagens.length;i++){


var mensagem=listaMensagens[i];
 html += '<div class="chat-message">';
 html += '<span class="chat-message-apelido">'+mensagem.apelido+ 
 '</span>';
 html += '<span class="chat-message-item">'+mensagem.mensagem+
 '</span>';
 html += '</div>';
  
  }
  

  return html;
}


function atualizarHTML(){
var chatmens=document.getElementById('chat-messages');
chatmens.innerHTML=formatarMensagens();
}

const commitMessageClickHandler=()=>{
var mensagemInput=document.querySelector('#message-input');


if(mensagemInput.value.trim().length==0){
mensagemInput.focus();
return;

}

adicionarMensagem("Mensagem: ",mensagemInput.value)
atualizarHTML();
document.getElementById("message-input").value=''
}




module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
