const calcular = document.getElementById('calcular');


function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //Validando se há algo no campo

    if(nome !== '' && altura !== '' && peso !== ''){

        const valorImc = (peso / (altura * altura));
        
        let classificacaoImc = '';

        if(valorImc < 18.5){
            classificacaoImc = 'a baixo do peso ideal';
        }else if(valorImc < 24.9){
            classificacaoImc = 'no peso ideal.';
        }else if(valorImc < 25){
            classificacaoImc = 'levemente acima do peso';
        }else if(valorImc < 30){
            classificacaoImc = 'com obesidade grau I';
        }else if (valorImc < 39.9){
            classificacaoImc = 'com obesidade grau II';
        }else{
            classificacaoImc = 'obesidade III';
        }

        resultado.textContent = `${nome}, o valor do seu IMC é ${valorImc.toFixed(2)} e você está ${classificacaoImc}`;

    }else{
        resultado.textContent = 'O preenchimento de todos os campos é obrigatório.';
    }

}

calcular.addEventListener('click', imc);