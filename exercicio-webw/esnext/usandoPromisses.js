//com promisse...
const http = require('http')
const { promises } = require('fs')
const { resolve } = require('path')
const { reject } = require('lodash')
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))

                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}
//callback hell uma callback dentro da outra

// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })


//SEMPRE QUE VOCÊ USAR O PROMISSE E USAR O THEN E BOM USAR O CATCH PARA TRATAR OS DADOS
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas =>[].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) 

 getTurma('D').catch(e => console.log(e.message))  