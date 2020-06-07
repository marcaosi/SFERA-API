module.exports = (sequelize, DataTypes) => {
    const HorarioTrabalho = sequelize.define('HorarioTrabalho', {
        entrada1: DataTypes.DATE,
        entrada2: DataTypes.DATE,
        saida1: DataTypes.DATE,
        saida2: DataTypes.DATE
    }, {
        freezeTableName: true
    })

    return HorarioTrabalho
}