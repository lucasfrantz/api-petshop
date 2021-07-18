const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeArquivo, callbackImagemCriada) => {
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoValido = tiposValidos.indexOf(tipo.substring(1)) !== -1
    if (!tipoValido) {
        const erro = "Tipo do arquivo e invalido"
        console.log('Tipo Invalido')
        callbackImagemCriada(erro)
    } else {
        const novoCaminho = `./assets/imagens/${nomeArquivo}${tipo}`
        console.log(novoCaminho)
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => {
                callbackImagemCriada(false, novoCaminho)
            })
    }
}

