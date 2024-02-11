//par nome/valor
const saudacao = "oba" //  contexto lexico 1

function exec() {
    const saudacao = ' Falaaaaa' //contexto lexico
    return saudacao
}

// objetos sao grupos aninhados de pare nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua fuleira',
        numero: 123
    }
}
console.log(exec())
console.log(saudacao)
console.log(cliente)
