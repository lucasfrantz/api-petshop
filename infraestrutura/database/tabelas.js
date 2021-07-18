class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos();
        this.criarServicos();
        this.criarPets();
    }

    criarAtendimentos() {
        let sql = 'CREATE TABLE IF NOT EXISTS Atendimentos( id int NOT NULL AUTO_INCREMENT,cliente varchar(11) NOT NULL,' +
            'pet varchar(20), data datetime NOT NULL, dataCriacao datetime NOT NULL,servico varchar(20) NOT NULL, ' +
            'status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela atendimentos criada com sucesso')
            }
        })
    }

    criarServicos() {
        let sql = 'CREATE TABLE IF NOT EXISTS Servicos( id int NOT NULL AUTO_INCREMENT,nome varchar(50) NOT NULL,' +
            'preco DECIMAL(10,2),PRIMARY KEY(id))'
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Servicos criada com sucesso')
            }
        })
    }

    criarPets() {
        let sql = 'CREATE TABLE IF NOT EXISTS Pets( id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL,' +
            'imagem varchar(200),PRIMARY KEY(id))'
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Pets criada com sucesso')
            }
        })
    }
}
module.exports = new Tabelas