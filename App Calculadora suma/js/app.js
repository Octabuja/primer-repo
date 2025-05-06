console.log('Aplicacion Calculadora');

function sumar(){
    const forma= document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandob = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado= 'La operacion no contiene numeros'
    document.getElementById('resultado').innerHTML= `Resultado: ${resultado}`;

    console.log(`Resultado: ${resultado}`);
}
