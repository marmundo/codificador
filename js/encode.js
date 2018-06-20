var botaoCodificar = document.querySelector("#codifica");
botaoCodificar.addEventListener("click", function(event) {
    event.preventDefault();

	var frase=document.querySelector("#mensagem");
	var codificado=""
	console.log(frase)
	for (i = 0; i < frase.value.length; i++) {	
		codificado+=frase.value.charCodeAt(i);
		codificado+="-";		
	}
	var mensagem_codificada=document.querySelector("#mensagem-codificada");
	mensagem_codificada.value=codificado;
});