const btnConverter = document.getElementById("btnConverter").addEventListener("click", () => {
    const valor = document.getElementById("valor").value;
    const moedaInicial = document.getElementById("moedaInicialField").value;
    const moedaFinal = document.getElementById("moedaFinalField").value;
    const valorInput = document.getElementById("valor")
    const moedaInicialSelect = document.getElementById("moedaInicialField");
    const moedaFinalSelect = document.getElementById("moedaFinalField");
    const textoMoedaInicial = moedaInicialSelect.options[moedaInicialSelect.selectedIndex].text;
    const textoMoedaFinal = moedaFinalSelect.options[moedaFinalSelect.selectedIndex].text;
    const apiKey = "128b70bd60bdf9c60a7c44ca"

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${moedaInicial}`)
        .then(response => response.json())
        .then(data => {
            const taxaCambio = Number(data.conversion_rates[moedaFinal]);
            console.log(data)
            const valorConvertido = (valor * taxaCambio).toFixed(2);

            document.getElementById("resultColuna1").innerHTML = `<p><strong>Conversão de:</strong> ${textoMoedaInicial}</p>
                                                                  <p><strong>Valor a converter:</strong> ${valor}</p>`

            document.getElementById("resultColuna2").innerHTML = `<p><strong>Para:</strong> ${textoMoedaFinal}</p>
                                                                  <p><strong>Resultado da conversão:</strong> ${valorConvertido} </p>`;
        })
        .catch(error => {
            console.log("Erro na busca da taxa de câmbio:", error);
            document.getElementById("resultErro").innerHTML = "Erro ao obter taxa de câmbio. Tente novamente mais tarde.";
        });
    
    valorInput.value = ''
    moedaInicialSelect.selectedIndex = 0
    moedaFinalSelect.selectedIndex = 0
})


function updateTime() {
    let horaAtual = new Date();
    let hours = horaAtual.getHours();
    let minutes = horaAtual.getMinutes();
    let seconds = horaAtual.getSeconds();
  
    // Formatação de zero à esquerda, se necessário
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("datetime").innerText = timeString;
}
  
// Atualiza o relógio a cada segundo
setInterval(updateTime, 1000);

