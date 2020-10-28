const { Model, DataTypes } = require('sequelize')

class Professor extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Subject, { foreignKey: 'professorId', through: 'profSubj', as: 'subjects' })
    }
}

module.exports = Professor