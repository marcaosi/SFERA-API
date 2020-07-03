module.exports = (sequelize, DataTypes) => {
    const Colaborador = sequelize.define('Colaborador', {
        nome: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        documento: DataTypes.STRING,
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
        matricula: DataTypes.BIGINT,
        senha: DataTypes.STRING
    }, {
        freezeTableName: true
    })

    return Colaborador
}