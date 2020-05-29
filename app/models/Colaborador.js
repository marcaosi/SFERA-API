module.exports = (sequelize, DataTypes) => {
    const Colaborador = sequelize.define('Colaborador', {
        nome: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        documento: DataTypes.STRING,
        nascimento: DataTypes.DATE,
        matricula: DataTypes.BIGINT
    }, {
        freezeTableName: true
    })

    return Colaborador
}