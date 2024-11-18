'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Despesas extends Model {
    static associate(models) {
      // Cada despesa pertence a um usuário
      Despesas.belongsTo(models.Usuario, {
        foreignKey: 'userId', // Chave estrangeira na tabela Despesas
        as: 'usuario' // Alias da associação
      });
    }
  }

  Despesas.init({
    valor: DataTypes.FLOAT,
    dataDespesa: DataTypes.STRING,
    categoria: DataTypes.STRING,
    descricao: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Despesas',
  });

  return Despesas;
};
