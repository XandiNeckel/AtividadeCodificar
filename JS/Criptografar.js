var saida = document.getElementById('decode');

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault()
})


document.getElementById('btn').addEventListener('click', function () {
  var Escolher = document.getElementById('Escolher').value
  if (Escolher === 'César') {
    verificaCésar()

  } else{
    verificaBase()
  }

})
  ///Base64///
function verificaBase(){
  if (document.getElementById('radio-code').checked === true ){
    saida.value=CodeBase64(document.getElementById('code').value)
  } else{
    saida.value=deCodeBase64(document.getElementById('code').value)
  } 
}

function verificaCésar() {
  if (
    document.getElementById('radio-code').checked === true
  ) {
      //valor de saida
    saida.value = cifraDeCesar(document.getElementById('code').value,parseInt(document.getElementById('passo').value));
  } else {
    saida.value = cifraDeCesarDecodificar(document.getElementById('code').value, parseInt(document.getElementById('passo').value));
  }

}
      // key = chave nº
function cifraDeCesar(normalText, key) {
  normalText = normalText.split('');
  var encodedText = '';
  console.log(normalText)
                          // i++ para fazer a volta toda
  for (var i = 0; i < normalText.length; i++) {
    var currentCharCode = normalText[i].charCodeAt();

    if (currentCharCode >= 97 && currentCharCode <= 122) {
      encodedText += String.fromCharCode((currentCharCode - 97 + key) % 26 + 97);
      console.log((currentCharCode - 97 + key) % 26 + 97)
    } else if (currentCharCode >= 65 && currentCharCode <= 90) {
      encodedText += String.fromCharCode((currentCharCode - 65 + key) % 26 + 65);
      console.log((currentCharCode - 65 + key) % 26 + 65)
    } else {
      encodedText += normalText[i];
    }
  }
  return encodedText;
}

function cifraDeCesarDecodificar(encodedText, key) {
  encodedText = encodedText.split('');
  let normalText = '';

  for (let i = 0; i < encodedText.length; i++) {
    const currentCharCode = encodedText[i].charCodeAt();

    if (currentCharCode >= 97 && currentCharCode <= 122) {
      normalText += String.fromCharCode((currentCharCode - 122 - key) % 26 + 122);
    } else if (currentCharCode >= 65 && currentCharCode <= 90) {
      normalText += String.fromCharCode((currentCharCode - 90 - key) % 26 + 90);
    } else {
      normalText += encodedText[i];
    }
    console.log(normalText);
  }

  return normalText;
}

function CodeBase64(text){
  return btoa(text)
  // btn padrao
}


function deCodeBase64(text){
  return atob(text)
} //btn patrao