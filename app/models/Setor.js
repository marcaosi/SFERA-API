module.exports = (sequelize, DataTypes) => {
    const Setor = sequelize.define('Setor', {
        nome: DataTypes.STRING
    }, {
        freezeTableName: true
    })

    return Setor
}