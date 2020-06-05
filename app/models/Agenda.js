module.exports = (sequelize, DataTypes) => {
    const Agenda = sequelize.define('Agenda', {
        
    }, {
        freezeTableName: true
    })

    Agenda.associate = (models) => {
        Agenda.belongsTo(models.Aluno, {
            foreignKey: 'aluno_id', 
            as: 'aluno'
        })

        Agenda.belongsTo(models.Sala, {
            foreignKey: 'sala_id', 
            as: 'sala'
        })
    }

    return Agenda
}