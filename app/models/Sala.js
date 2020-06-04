module.exports = (sequelize, DataTypes) => {
    const Sala = sequelize.define('Sala', {
        ano: DataTypes.INTEGER,
        descricao: DataTypes.STRING
    }, {
        freezeTableName: true
    })

    return Sala
}