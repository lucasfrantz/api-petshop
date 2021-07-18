const query = require('../infraestrutura/database/queries')

class Pet {
    adiciona(pet) {
        const sql = "INSERT INTO Pets SET ?"
        return query(sql, pet)
    }

    buscaPorId(id) {
        const sql = `SELECT * FROM Pets WHERE id=${id}`

        return query(sql)
    }

    lista() {
        const sql = 'SELECT * FROM Pets'

        return query(sql)
    }

    altera(id, valores) {
        const sql = 'UPDATE Pets SET ? WHERE id=?'

        return query(sql, [id, valores])
    }

    deleta(id) {
        const sql = 'DELETE FROM Pets WHERE id=?'

        return query(sql, id)
    }
}

module.exports = new Pet