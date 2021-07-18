const conexao = require('../infraestrutura/database/conexao')
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

    lista(res) {
        let sql = 'SELECT * FROM Servicos'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }

        })
    }


    buscaPorId(id, res) {
        let sql = `SELECT * FROM Servicos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const pet = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(pet)
            }

        })
    }

    altera(id, valores, res) {
        let sql = 'UPDATE Servicos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ ...valores, id })
            }

        })
    }
    deleta(id, res) {
        let sql = 'DELETE FROM Servicos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }

        })
    }
}

module.exports = new Servico;