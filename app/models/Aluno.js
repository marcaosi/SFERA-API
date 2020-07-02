module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define('Aluno', {
        nome: DataTypes.STRING,
        nascimento: {
            type: DataTypes.DATE,
            get: function (){
                const nascimento = new Date(this.getDataValue('nascimento'))
                const month = nascimento.getMonth() < 10 ? `0${nascimento.getMonth() + 1}` : nascimento.getMonth()
                const day = nascimento.getDate() < 10 ? `0${nascimento.getDate()}` : nascimento.getDate()
                const dateReturn = `${nascimento.getFullYear()}-${month}-${day}`
                return dateReturn
            }
        },
        pai: DataTypes.STRING,
        mae: DataTypes.STRING,
        documento: DataTypes. STRING,
        contato: DataTypes.STRING
    }, {
        freezeTableName: true
    })

    return Aluno
}