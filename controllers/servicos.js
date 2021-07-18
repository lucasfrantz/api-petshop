const Servico = require('../models/servicos')
module.exports = app => {
    app.get('/servicos', (req, res) => {
        Servico.lista(res)
    })
    app.get('/servicos/:id', (req, res) => {
        console.log(req.params)
        const id = parseInt(req.params.id)

        Servico.buscaPorId(id, res)
    })


    app.post('/servicos', (req, res) => {
        //console.log(req.body);
        const atendimento = req.body;
        Servico.adiciona(atendimento, res);
        //res.send('Voce esta na rota de atendimentos e POST')
    })

    app.patch('/servicos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body;
        Servico.altera(id, valores, res)
    })

    app.delete('/servicos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Servico.deleta(id, res)
    })
}