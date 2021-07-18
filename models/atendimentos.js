const moment = require('moment')
const axios = require('axios')
const conexao = require('../infraestrutura/database/conexao')
const repositorio = require('../repositorios/atendimentos')
class Atendimento {
    constructor() {
        this.dataValida = (data, dataCriacao) => moment(data).isSameOrAfter(dataCriacao);
        this.clienteValido = (tamanho) => tamanho == 11;
        this.valida = (parametros) => {
            return this.validacoes.filter(campo => {
                const { nome } = campo
                const parametro = parametros[nome]
                return campo.valido(parametro)
            })
        }
        this.validacoes = [
            {
                nome: 'data',
                mensagem: 'Data deve ser maior ou igual a data atual',
                valido: this.dataValida
            },
            {
                nome: 'cliente',
                mensagem: 'CPF deve ter 11 caracteres',
                valido: this.clienteValido
            }
        ]
    }
    adiciona(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        const parametros = {
            data: {
                data,
                dataCriacao
            },
            cliente: {
                tamanho: atendimento.cliente.length
            }
        }
        const erros = this.valida(parametros)
        const existemErros = erros.length

        if (existemErros) {
            return new Promise((resolve, reject) => {
                reject(erros)
            })
        }
        else {
            const atendimentoDatado = { ...atendimento, data, dataCriacao };

            return repositorio.adiciona(atendimentoDatado).then((resultados) => {
                const id = resultados.insertId
                return { ...atendimento, id }
            })
        }
    }

    lista(res) {
        return repositorio.lista()
    }


    buscaPorId(id) {

        return repositorio.buscaPorId(id).then(async (resultados) => {
            const atendimento = resultados[0]
            const cpf = atendimento.cliente
            const { data } = await axios.get(`http://localhost:8082/${cpf}`)
            atendimento.cliente = data
            return atendimento
        })
    }

    altera(id, valores) {
        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }

        return repositorio.altera(id, valores).then((resultados) => {
            return { ...valores, id }
        })
    }
    deleta(id) {
        return repositorio.deleta(id)
    }
}

module.exports = new Atendimento