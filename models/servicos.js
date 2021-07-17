const conexao = require('../infraestrutura/conexao')
class Servico {
    adiciona(servico) {
        const sql = "INSERT INTO Servicos SET ?"

        conexao.query(sql, servico, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }

        })
    }
}

module.exports = new Atendimento;