const prompt = require('prompt-sync')()

let nome = prompt('Digite o nome do aluno: ')
let n1 = Number(prompt('Digite a nota 1: '))
let n2 = parseFloat(prompt('Digite a nota 2: '))
let n3 = parseFloat(prompt('Digite a nota 3: '))
let faltas = parseFloat(prompt('Digite a porcentagem de faltas: '))
let resultado

media = ( (n1+n2+n3) /3 ).toFixed(2)

if(media < 5 || faltas >= 25)
    { 
        if (media < 5) {resultado = "REPROVADO POR NOTA"}
        if (faltas >= 25) {resultado = "REPROVADO POR FALTA"}
    }
else if( media >= 5 && media < 7 )
    { resultado = "RECUPERAÇÃO"}
else 
    { resultado = "APROVADO"}

console.log( `
Aluno: ${nome}
Média: ${media}
Faltas: ${faltas}
Resultado: ${resultado}` )