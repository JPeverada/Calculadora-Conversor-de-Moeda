let n1 = document.getElementById("num1").value;
let n2 = document.getElementById("num2").value;

function calc(){
    let num1 = parseFloat(n1.value);
    let num2 = parseFloat(n2.value);
    
    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, insira números válidos.");
        return;
    }else if (document.getElementById("box1").checked){
        let resultado = num1 + num2;
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }else if(document.getElementById("box2").checked){
        let resultado = num1 - num2;
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }else if (document.getElementById("box3").checked){
        let resultado = num1 * num2;
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }else {
        let resultado = num1 / num2;
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }
}

function converter(){
    let num1 = parseFloat(n1.value);
    let de = document.getElementById('moedaOrigem')
    let para = document.getElementById('moedaDestino')
    if (num1 < 0){
        alert('Digite um valor válido!');
        return;
    }

    let url = `https://economia.awesomeapi.com.br/json/last/:moedas`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("Dados recebidos:", data); // <- E isso também
            let resultado = data.result;
            document.getElementById("resultado").innerHTML = 
              `Resultado: ${num1} ${de} = ${resultado.toFixed(2)} ${para}`;
        })
        .catch(err => {
            console.error("Erro ao buscar a API:", err); // <- Mostra erro real
            document.getElementById("resultado").innerHTML = 
              "Erro ao buscar a conversão.";
        });
    

}