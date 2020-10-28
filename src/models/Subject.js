const { Model, DataTypes } = require('sequelize')

class Subject extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Professor, { foreignKey: 'subjectId', through: 'profSubj', as: 'professors' })
        this.belongsToMany(models.Student, { foreignKey: 'subjectId', through: 'studSubj', as: 'students' })
    }
}

module.exports = Subject