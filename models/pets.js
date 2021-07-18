const conexao = require('../infraestrutura/conexao')
const uploadDeArquivo = require('../arquivos/uploadDeArquivos')
class Pet {
    adiciona(pet, res) {
        let sql = "INSERT INTO Pets SET ?"

        uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {
            if (erro) {
                res.status(400).json({ erro })
            } else {
                const novoPet = { nome: pet.nome, imagem: novoCaminho }
                conexao.query(sql, novoPet, (erro, resultados) => {
                    if (erro) {
                        res.status(400).json(erro)
                    } else {
                        res.status(201).json(novoPet)
                    }

                })
            }

        })


    }

    lista(res) {
        let sql = 'SELECT * FROM Pets'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }

        })
    }


    buscaPorId(id, res) {
        let sql = `SELECT * FROM Pets WHERE id=${id}`

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
        let sql = 'UPDATE Pets SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ ...valores, id })
            }

        })
    }
    deleta(id, res) {
        let sql = 'DELETE FROM Pets WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }

        })
    }
}

module.exports = new Pet