module.exports = (sequelize, DataTypes) => {
    const Frequencia = sequelize.define('Frequencia', {
        presenca: DataTypes.BOOLEAN,
        dataHora: DataTypes.DATE
    }, {
        freezeTableName: true
    })

    Frequencia.associate = (models) => {
        Frequencia.belongsTo(models.Aluno, {
            foreignKey: 'aluno_id',
            as: 'aluno'
        })

        Frequencia.belongsTo(models.Colaborador, {
            foreignKey: 'colaborador_id',
            as: 'colaborador'
        })
    }

    return Frequencia
}