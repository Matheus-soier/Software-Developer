const Sequelize = require("sequelize");
const sequelize = new Sequelize("aula4", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
 
sequelize
  .authenticate()
  .then(function () {
    console.log("Banco de dados conectado com sucesso!");
  })
  .catch(function (erro) {
    console.log("Falha ao conectar: " + erro);
  });

    const agendamentos = sequelize.define("agendamentos", {
        nome: {
            type: Sequelize.STRING,
        },
        endereco: {
            type: Sequelize.STRING,
        },
        bairro: {
            type: Sequelize.STRING,
        },
        cep: {
            type: Sequelize.STRING,
        },
    });

    //agendamentos.sync({force:true});
