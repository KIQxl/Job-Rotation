// criando o botão e adicionando o evento de click
let botao = document.querySelector("#btn-inverter");

botao.addEventListener("click", function(){
    // obtendo o valor da entrada do usuário
    let input = document.querySelector("#campo-palavra");
    let palavra = input.value;

    let palavraInvertida = "";

    // validação do conteúdo informado pelo usuário
    if(palavra.length != 0){
        // iterando cada letra da palavra informada pelo usuário de trás para frente usando a ordem inversa do contador, iniciando pela ultima letra da palavra através do indice
        for(var i = palavra.length - 1; i >= 0; i--){
            let letra = palavra[i];
    
            palavraInvertida += letra;

            // adicionando a palavra invertida no html 
            document.querySelector("#palavra-invertida").innerHTML = `A palavra '${palavra}' invertida fica '${palavraInvertida}'`;
        }

    } else {
        document.querySelector("#palavra-invertida").innerHTML = "Digite uma palavra";
    }

    // limpando o campo de input
    input.value = ""
})

alert("Por favor abrir o arquivo com a extensão Live server!");