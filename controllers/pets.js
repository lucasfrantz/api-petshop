const Pet = require('../models/pets')
module.exports = app => {
    app.get('/pets', (req, res) => {
        Pet.lista().then((resultados) => {
            res.status(200).json(resultados)
        }).catch((erros) => {
            res.status(400).json(erros)
        })
    })
    app.get('/pets/:id', (req, res) => {
        console.log(req.params)
        const id = parseInt(req.params.id)

        Pet.buscaPorId(id).then((resultados) => {
            res.status(200).json(resultados)
        }).catch((erros) => {
            res.status(400).json(erros)
        })
    })


    app.post('/pets', (req, res) => {
        const pet = req.body
        Pet.adiciona(pet).then((resultados) => {
            res.status(201).json(resultados)
        }).catch((erros) => {
            res.status(400).json(erros)
        })
    })

    app.patch('/pets/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body;
        Pet.altera(id, valores).then((resultados) => {
            res.status(200).json(resultados)
        }).catch((erros) => {
            res.status(400).json(erros)
        })
    })

    app.delete('/pets/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Pet.deleta(id).then((resultados) => {
            res.status(200).json(resultados)
        }).catch((erros) => {
            res.status(400).json(erros)
        })
    })
}