'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Receitas extends Model {
    static associate(models) {
      // Cada receita pertence a um usuário
      Receitas.belongsTo(models.Usuario, {
        foreignKey: 'userId', // Chave estrangeira na tabela Receitas
        as: 'usuario' // Alias da associação
      });
    }
  }

  Receitas.init({
    valor: DataTypes.FLOAT,
    dataReceita: DataTypes.STRING,
    categoria: DataTypes.STRING,
    descricao: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Receitas',
  });

  return Receitas;
};
