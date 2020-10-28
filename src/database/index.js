const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Professor = require('../models/Professor')
const Student = require('../models/Student')
const Subject = require('../models/Subject')


const connection = new Sequelize(dbConfig)


Professor.init(connection)
Student.init(connection)
Subject.init(connection)

Professor.associate(connection.models)
Student.associate(connection.models)
Subject.associate(connection.models)

module.exports = connection