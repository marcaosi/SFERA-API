module.exports = (sequelize, DataTypes) => {
    const Funcao = sequelize.define('Funcao', {
        nome: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        descricao: DataTypes.STRING
    }, {
        freezeTableName: true
    })

    Funcao.associate = (models) => {
        Funcao.belongsTo(models.Setor, {
            foreignKey: 'setor_id', 
            as: 'setor'
        })
    }

    return Funcao
}