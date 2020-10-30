const faker = require('faker')
const { factory } = require('factory-girl')
const Professor = require('../src/models/Professor')
const Student = require('../src/models/Student')
const Subject = require('../src/models/Subject')

factory.define('Professor', Professor,{
    name: faker.name.findName()
})

factory.define('Student', Student,{
    name: faker.name.findName()
})

factory.define('Subject', Subject,{
    name: faker.name.findName()
})

module.exports = factory