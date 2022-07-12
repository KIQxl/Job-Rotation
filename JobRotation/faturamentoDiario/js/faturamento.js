// Pegando o caminho do arquivo json que contém os dados
const dadosJson = "json/dados.json";

//Fazendo a busca no arquivo passado
fetch(dadosJson)
  .then((resp) => resp.json())
  .then(function (data) {
    //conteúdo da table
    let conteudo = "";

    //Lista de valores do arquivo de dados json
    let listaValores = data.map((v) => {
      return v.valor;
    });

    //Pegando o maior valor do mês
    const max = Math.max.apply(null, listaValores);

    //pegando o menor valor do mês
    const min = Math.min.apply(null, listaValores);

    //Adicionando o maior e menor valor na tabela
    conteudo += `
                <tr>
                <td>${max}</td>
                <td>${min}</td>
                `;
    //Somando o número de dias que tiveram faturamento
    let total = 0;
    let diasFaturados = 0;
    for (dado of data) {
      if (dado.valor != 0.0) {
        total += dado.valor;
        diasFaturados++;
      }
    }
    //Calculando a Média
    let media = total / diasFaturados;

    //Obtendo os dias que tiveram o faturamento maior que a média
    let faturamentoMaiorMedia = 0;
    for (dado of data) {
      if (dado.valor > media) {
        faturamentoMaiorMedia++;
      }
    }

    conteudo += `<td>${faturamentoMaiorMedia}</td>
                 </tr>`;

    document.querySelector("table").innerHTML += conteudo;
});


alert("Por favor abrir o arquivo com a extensão Live server!");
