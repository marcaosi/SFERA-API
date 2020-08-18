module.exports = (sequelize, DataTypes) => {
    const HorarioTrabalho = sequelize.define('HorarioTrabalho', {
        entrada1: DataTypes.STRING,
        entrada2: DataTypes.STRING,
        saida1: DataTypes.STRING,
        saida2: DataTypes.STRING
    }, {
        freezeTableName: true
    })

    return HorarioTrabalho
}