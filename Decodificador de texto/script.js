var textArea = document.querySelector(".area-de-texto");
var mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    var textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value= "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}

function btnDescriptar() {
    var textoDescriptado = descriptar(textArea.value);
    mensagem.value = textoDescriptado;
    textArea.value = "";
}

function descriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][1])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringEncriptada;
}

function copiar() {
    var textoCopiado = document.querySelector(".mensagem");

    textoCopiado.select();
    document.execCommand('copy');
    alert("Texto copiado!");
    mensagem.value = "";
}
