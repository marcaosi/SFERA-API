module.exports = (sequelize, DataTypes) => {
    const ItemAgenda = sequelize.define('ItemAgenda', {
        tipo: DataTypes.STRING,
        observacao: DataTypes.STRING,
        dataHora: DataTypes.DATE
    }, {
        freezeTableName: true
    })

    ItemAgenda.associate = (models) => {
        ItemAgenda.belongsTo(models.Agenda, {
            foreignKey: 'agenda_id',
            as: 'agenda'
        })

        ItemAgenda.belongsTo(models.Colaborador, {
            foreignKey: 'colaborador_id',
            as: 'colaborador'
        })
    }

    return ItemAgenda
}