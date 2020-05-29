module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define('Aluno', {
        nome: DataTypes.STRING,
        nascimento: DataTypes.DATE,
        pai: DataTypes.STRING,
        mae: DataTypes.STRING,
        documento: DataTypes. STRING,
        contato: DataTypes.STRING
    }, {
        freezeTableName: true
    })

    return Aluno
}