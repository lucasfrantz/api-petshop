const conexao = require('../infraestrutura/database/conexao')
const repositorio = require('../repositorios/servicos')
class Servico {
    adiciona(servico) {
        return repositorio.adiciona(servico)
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
        return repositorio.altera(id, valores)
    }
    deleta(id) {
        return repositorio.deleta(id)
    }
}

module.exports = new Servico;