// criando uma array com os valores iniciais da sequencia de Fibonacci para que os demais sejam calculados
const fibonacci = [0, 1, 1, 2];
const botao = document.querySelector("#botao");

// adicionando o evento "click" ao botão
botao.addEventListener("click", function () {
    let input = document.querySelector("#numero");
    let numero = input.value;

    // condiocional simples para fazer a validação do conteúdo do campo
    if (numero.length != 0){
        // fazendo o calculo dos proximos números da sequencia por meio de um laço de repetição e adicionando-os na array
        for (var i = 0; i < 100; i++) {
            let proximoNumero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
            fibonacci.push(proximoNumero);
        }

        // fazendo a validação dos números que pertencem ou não a sequencia calculada acima e conventendo o valor do input(String) para int
        if (fibonacci.includes(parseInt(numero))) {
            let mensagem = document.querySelector("#mensagem");
            mensagem.textContent = `O numero ${numero} faz parte da sequencia`;
        } else {
            let mensagem = document.querySelector("#mensagem");
            mensagem.textContent = `O numero ${numero} não faz parte da sequencia`;
        }
    }
    else {
        alert("digite um numero");
    }
    // limpando o input
    input.value = ""
})
