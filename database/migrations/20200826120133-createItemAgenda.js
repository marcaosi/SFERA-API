'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ItemAgenda', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      dataHora: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tipo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      observacao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      agenda_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Agenda',
          key: 'id'
        }
      },
      colaborador_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Colaborador',
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
    return queryInterface.dropTable('ItemAgenda')
  }
};
