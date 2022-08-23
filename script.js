const inputTexto=document.querySelector(".input-texto");
const mensaje=document.querySelector(".mensaje");
// const copiar=document.querySelector(".copiar");

function btnEncriptar(){
   const textoEncriptado = encriptar(inputTexto.value);
   mensaje.value = textoEncriptado;
   inputTexto.value = "";
}
function encriptar(stringEncriptada){
let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
stringEncriptada=stringEncriptada.toLowerCase();
if (   inputTexto.style.color != "red"){
   for(let i=0; i < matrizCodigo.length; i++){
      if(stringEncriptada.includes(matrizCodigo[i][0])){
         stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
      }
   }
   return stringEncriptada;
}else{
   inputTexto.style.color = "black";
   alert("Este es un texto encriptado: Será desencritado ahora!!!");
   return desencriptar(inputTexto.value);


}
}
function desencriptar(stringDesencriptada){
let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
stringDesencriptada=stringDesencriptada.toLowerCase();

for(let i=0; i < matrizCodigo.length; i++){
   if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
      }
   }

return stringDesencriptada;
}

function btnDesencriptar(){
   inputTexto.style.color = "black";
   const textoDesencriptado= desencriptar(mensaje.value);
   inputTexto.value = textoDesencriptado;
   mensaje.value = "";
}

function btnCopiar(){
   const textoCopiado= copiar(mensaje.value);
   inputTexto.value = textoCopiado;
   inputTexto.style.color = "red";
   // mensaje.value="";
   
}
function copiar(stringCopiado){
   stringCopiado=mensaje.value;
   return stringCopiado;
}

function btnBorrar(){
   inputTexto.style.color = "black";
   return mensaje.value="", inputTexto.value = "";

}

// function btnCopiar(){
//    mensaje.Select;
//    navigator.clipboard.writeText(mensaje.value);
//    alert("Texto copiado: "+ mensaje.value);
//    console.log("copiado");
//    mensaje.value="";
// }