const query = require('../infraestrutura/database/queries')

class Servico {
    adiciona(servico) {
        const sql = "INSERT INTO Servicos SET ?"
        return query(sql, servico)
    }

    buscaPorId(id) {
        const sql = `SELECT * FROM Servicos WHERE id=${id}`

        return query(sql)
    }

    lista() {
        const sql = 'SELECT * FROM Servicos'

        return query(sql)
    }

    altera(id, valores) {
        const sql = 'UPDATE Servicos SET ? WHERE id=?'

        return query(sql, [id, valores])
    }

    deleta(id) {
        const sql = 'DELETE FROM Servicos WHERE id=?'

        return query(sql, id)
    }
}

module.exports = new Servico