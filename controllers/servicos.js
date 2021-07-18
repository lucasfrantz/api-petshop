const Servico = require('../models/servicos')
module.exports = app => {
    app.get('/servicos', (req, res) => {
        Servico.lista().then((resultados) => {
            res.status(200).json(resultados)
        }).catch((erros) => {
            res.status(400).json(erros)
        })
    })
    app.get('/servicos/:id', (req, res) => {
        console.log(req.params)
        const id = parseInt(req.params.id)

        Servico.buscaPorId(id).then((resultados) => {
            res.status(200).json(resultados)
        }).catch((erros) => {
            res.status(400).json(erros)
        })
    })


    app.post('/servicos', (req, res) => {
        const servico = req.body;
        Servico.adiciona(servico).then((resultados) => {
            res.status(201).json(resultados)
        }).catch((erros) => {
            res.status(400).json(erros)
        })
    })

    app.patch('/servicos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body;
        Servico.altera(id, valores).then((resultados) => {
            res.status(200).json(resultados)
        }).catch((erros) => {
            res.status(400).json(erros)
        })
    })

    app.delete('/servicos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Servico.deleta(id).then((resultados) => {
            res.status(200).json(resultados)
        }).catch((erros) => {
            res.status(400).json(erros)
        })
    })
}