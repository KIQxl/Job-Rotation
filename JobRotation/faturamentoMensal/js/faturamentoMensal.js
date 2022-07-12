// criando uma array de estados com seus faturamentos
const listaFaturamento = [
    criaEstado("SP", 67836.43),
    criaEstado("RJ", 36678.66),
    criaEstado("MG", 29229.66),
    criaEstado("ES", 27165.48),
    criaEstado("outros", 19849.53)
]

// função para criar os estados com suas siglas correspondentes e faturamentos que retorna um objeto estado
function criaEstado(sigla, valorFaturamento) {

    let estado = {
        estado: sigla,
        faturamento: valorFaturamento
    };

    return estado;
}

let faturamentoTotal = 0;
let conteudoFaturamento = "";

// um laço de repetição simples que vai percorrer toda a array de estados acessando os valores dos seus atributos e inserindo eles em uma tabela que vai ser criada pelo conteúdo da variável (conteudo) 
for (var i = 0; i < listaFaturamento.length; i++) {
    let estado = listaFaturamento[i];
    let faturamentoEstado = estado.faturamento;

    faturamentoTotal += faturamentoEstado;
    conteudoFaturamento = `<tr>
                <td>${estado.estado}</td>
                <td>R$ ${estado.faturamento.toFixed(2)}</td>
                </tr>`

    document.querySelector("#tabela-faturamento").innerHTML += conteudoFaturamento;
}

let conteudoPercentual = "";

// outro laço simples e muito parecido com o anterior, porém esse faz o calculo do percentual que cada estado teve em relação ao faturamento total dos estados.
for (var i = 0; i < listaFaturamento.length; i++) {
    let estado = listaFaturamento[i];

    let valorParticipacaoEstado = (estado.faturamento * 100) / faturamentoTotal;

    let estadoPercentual = {
        estado: estado.estado,
        percentual: valorParticipacaoEstado
    }

    conteudoPercentual = `<tr>
                <td>${estadoPercentual.estado}</td>
                <td>${estadoPercentual.percentual.toFixed(2)} %</td>
                </tr>`

    document.querySelector("#tabela-participacao").innerHTML += conteudoPercentual;   
}


