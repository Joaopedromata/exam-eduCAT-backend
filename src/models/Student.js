const { Model, DataTypes } = require('sequelize')

class Student extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            isBusy: DataTypes.BOOLEAN
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Subject, { foreignKey: 'studentId', through: 'studSubj', as: 'subjects' })
    }
}

module.exports = Student