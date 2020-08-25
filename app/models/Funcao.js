module.exports = (sequelize, DataTypes) => {
    const Funcao = sequelize.define('Funcao', {
        nome: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        descricao: DataTypes.STRING,
        setor_id: DataTypes.INTEGER,
        horarioTrabalho_id: DataTypes.INTEGER
    }, {
        freezeTableName: true
    })

    Funcao.associate = (models) => {
        Funcao.belongsTo(models.Setor, {
            foreignKey: 'setor_id', 
            as: 'setor'
        })

        Funcao.belongsTo(models.HorarioTrabalho, {
            foreignKey: 'horarioTrabalho_id',
            as: 'horarioTrabalho'
        })
    }

    return Funcao
}