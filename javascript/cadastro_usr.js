
// function cmdSendOnClick() {

//     //   let crc = form1.crc.value;
//     //   if (isCRC(crc)) {
//     //       alert("é um crc válido");
//     //   }
//     //   else {
//     //       alert('não é um crc válido');
//     //   }
    
//       let telefone = login_form.tel.value;
//       if (isTelefone(telefone)) {
//           console.log("é um telefone válido")
//       }
//       else {
//           alert('não é um telefone válido \nO formato é: (xx)xxxxx-xxxx');
//       }
    
//       let senha = login_form.password.value;
//       if (isSenha(senha)) {
//           console.log("é uma senha válida")
//       }
//       else {
//           alert('não é uma senha válida \nO formato é: pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial');
            
//       }
    
//       let nome = login_form.name.value;
//       if (isNome(nome)) {
//           console.log("é um nome válido")
//       }
//       else {
//           alert('não é um nome válido');
//       }
    
//       let email = login_form.email.value;
//       if (isEmail(email)) {
//           console.log("é um email válido")
//       }
//       else {
//           alert('não é um email válido');
//       }
    
    
//     function isNome(nome) {
//       const re = /^[A-Za-z]{3,}/
//       return re.test(nome)
//     }
    
//     function isEmail(email) {
//       const re = /^[\w.]+@([A-Za-z]{3,}.)+[A-Za-z]{2,4}$/
//       return re.test(email)
//     }
    
//     // function isCRC(crc) {
//     //   const re = /(^\d{8}-\d{2})|\d{10}/
//     //   return re.test(crc)
//     // }
    
//     function isTelefone(telefone) {
//       const re = /^\(\d{2}\)(\d{5}[-]\d{4})/
//       return re.test(telefone)
//     }
    
//     function isSenha(senha) {
//       const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&*]).{6,}/
//       return re.test(senha)
//     }
    
//     }


function getParameters() {

  var params    = new Array();
  var paramsRet = new Array();
  var url = window.location.href;     // Obtém a URL
  var paramsStart = url.indexOf("?"); // Procura ? na URL

  if(paramsStart != -1){ 
   // Encontrou ? na URL
    var paramString = url.substring(paramsStart + 1); // Retorna parte da URL após ?
    paramString = decodeURIComponent(paramString);    // Decodifica código de URI da URL
    var params = paramString.split("&"); // Retorna trechos da String separados por &
    for(var i = 0 ; i < params.length ; i++) {
      var pairArray = params[i].split("="); // Retorna trechos da String separados por =
      if(pairArray.length == 2){
        paramsRet[pairArray[0]] = pairArray[1];
      }

    }
    return paramsRet;
  }
  return null; // Não encontrou ? na URL
}

function mascaraTelefone(event) {
 let tecla = event.key;
 // Regex: 
 // g = não termina verificação enquanto não houver combinação para todos os elementos da Regex
 // \D+ = troca qualquer caractere que não seja um dígito por caracter vazio
 let telefone = event.target.value.replace(/\D+/g, "");

 // Regex: i = case insensitive
 // Se Tecla é número, concatena com telefone
 if (/^[0-9]$/i.test(tecla)) {
   telefone = telefone + tecla;
   let tamanho = telefone.length;

   if (tamanho >= 12) { // Se telefone com 12 ou mais caracteres, não faz mais nada
     return false;
   }

   if (tamanho > 10) { 
     telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
   } else if (tamanho > 5) { 
     telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
   } else if (tamanho > 2) { 
     telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
   } else {
     telefone = telefone.replace(/^(\d*)/, "($1");
   }

   event.target.value = telefone;
 }

 if (!["Backspace", "Delete", "Tab"].includes(tecla)) {
   return false;
 }
}

// *******toggle for mobile**********

const toggleBtn = document.getElementById('toggle-btn');
    const toggleOptions = document.querySelector('.toggle-options');

    toggleBtn.addEventListener('click', function() {
        toggleOptions.classList.toggle('show');
    });