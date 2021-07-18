const repositorio = require('../repositorios/pets')
const uploadDeArquivo = require('../infraestrutura/arquivos/uploadDeArquivos')
class Pet {
    adiciona(pet) {


        uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {
            if (erro) {
                return new Promise((resolve, reject) => {
                    reject(erro)
                })
            } else {
                const novoPet = { nome: pet.nome, imagem: novoCaminho }
                return repositorio.adiciona(novoPet).then((resultados) => {
                    const id = resultados.insertId
                    return { ...novoPet, id }
                })
            }

        })


    }

    lista() {
        return repositorio.lista()
    }


    buscaPorId(id) {
        return repositorio.buscaPorId(id).then((resultados) => {
            return resultados[0]
        })
    }

    altera(id, valores) {
        return repositorio.altera(id, valores).then((resultados) => {
            return { ...valores, id }
        })
    }
    deleta(id) {
        return repositorio.deleta(id).then((resultados) => {
            return { id }
        })
    }
}

module.exports = new Pet