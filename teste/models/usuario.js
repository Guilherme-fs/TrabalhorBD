'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // Um usuário pode ter muitas despesas
      Usuario.hasMany(models.Despesas, {
        foreignKey: 'userId', // Chave estrangeira na tabela Despesas
        as: 'despesas' // Alias da associação
      });

      // Um usuário pode ter muitas receitas
      Usuario.hasMany(models.Receitas, {
        foreignKey: 'userId', // Chave estrangeira na tabela Receitas
        as: 'receitas' // Alias da associação
      });
    }
  }

  Usuario.init({
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });

  return Usuario;
};
