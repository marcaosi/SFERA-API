'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Aluno", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pai: {
        type: Sequelize.STRING
      },
      nascimento: {
        allowNull: false,
        type: Sequelize.DATE
      },
      mae: {
        allowNull: false,
        type: Sequelize.STRING
      },
      documento: {
        type: Sequelize.STRING
      },
      contato: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Aluno")
  }
};
