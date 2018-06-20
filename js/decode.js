var botaoDecodificar = document.querySelector("#decodifica");
botaoDecodificar.addEventListener("click", function(event) {
    event.preventDefault();

	var frase=document.querySelector("#mensagem_codificada");
	console.log(frase)
	frase=frase.value.split("-")
	
	var decodificada=""
	for (i = 0; i < frase.length; i++) {
		letra=frase[i] 	
		console.log("letra: "+letra)
		console.log(parseInt(letra))
		console.log(String.fromCharCode(parseInt(letra)))
		decodificada+=String.fromCharCode(letra)		
	}
	var mensagem_decodificada=document.querySelector("#mensagem-decodificada");
	mensagem_decodificada.value=decodificada;
});