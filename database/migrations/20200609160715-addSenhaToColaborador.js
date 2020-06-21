'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Colaborador', // table name
      'senha', // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Colaborador', 'senha')
  }
};
