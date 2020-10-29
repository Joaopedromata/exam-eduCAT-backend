const { sequelize } = require('../../models/index')

module.exports = () => {
    return Object.keys(sequelize.models).map(key => {
        return sequelize.models[key].destroy({ truncate: true, force: true })
    })
} 