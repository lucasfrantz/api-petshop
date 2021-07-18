const Pet = require('../models/pets')
module.exports = app => {
    app.get('/pets', (req, res) => {
        Pet.lista(res)
    })
    app.get('/pets/:id', (req, res) => {
        console.log(req.params)
        const id = parseInt(req.params.id)

        Pet.buscaPorId(id, res)
    })


    app.post('/pets', (req, res) => {
        //console.log(req.body);
        const atendimento = req.body;
        Pet.adiciona(atendimento, res);
        //res.send('Voce esta na rota de atendimentos e POST')
    })

    app.patch('/pets/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body;
        Pet.altera(id, valores, res)
    })

    app.delete('/pets/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Pet.deleta(id, res)
    })
}