'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Agenda", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sala_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Sala',
          key: 'id'
        }
      },
      aluno_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Aluno',
          key: 'id'
        }
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
    return queryInterface.dropTable("Agenda")
  }
};
