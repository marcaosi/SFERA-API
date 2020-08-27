module.exports = (sequelize, DataTypes) => {
    const Ocorrencia = sequelize.define('Ocorrencia', {
        dataHora: DataTypes.DATE,
        descricao: DataTypes.STRING
    }, {
        freezeTableName: true
    })

    Ocorrencia.associate = (models) => {
        Ocorrencia.belongsTo(models.Aluno, {
            foreignKey: 'aluno_id',
            as: 'aluno'
        })

        Ocorrencia.belongsTo(models.Colaborador, {
            foreignKey: 'colaborador_id',
            as: 'colaborador'
        })
    }

    return Ocorrencia
}