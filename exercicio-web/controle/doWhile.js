function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
    
}

let opcao = 0 ;

do{opcao =getInteinteiroAleatorioEntre(-1,10)
console.log(`Opção escolhida foi ${opcao}.`)


console.log('Até a próxima !!!!!!!!!!!')
}while(opcao != -1)
