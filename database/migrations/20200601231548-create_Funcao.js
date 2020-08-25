'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Funcao', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncremente: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      descricao: {
        type: Sequelize.STRING
      },
      setor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Setor',
          key: 'id'
        }
      },
      horarioTrabalho_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'HorarioTrabalho',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Funcao')
  }
};
