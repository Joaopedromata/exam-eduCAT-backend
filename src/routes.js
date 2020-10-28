const Router = require('express')
const Professor = require('./models/Professor')
const Student = require('./models/Student')
const Subject = require('./models/Subject')

const SubjectsControlles = require('./controllers/SubjectsController')
const StudentsController = require('./controllers/StudentsController')

const routes = Router()

routes.get('/professors', async (req, res) => {

    const { name } = req.body

    const insert = await Professor.create({
        name
    })

    return res.json(insert)
})

routes.get('/students/subject/:subjectId', StudentsController.index)
routes.post('/students/:studentId', StudentsController.changeState)
routes.get('/students/:name', StudentsController.search)


routes.get('/subjects',  SubjectsControlles.index)

routes.post('/associate/professor/:professorId/subject/:subjectId', async (req, res) => {

    const { professorId, subjectId } = req.params

    const professor = await Professor.findByPk(professorId)

    if (!professor) {
        return res.status(400).json({ error: 'Professor not found' })
    }

    const insert = await professor.addSubjects(subjectId)

    return res.status(200).json(insert)
})

routes.post('/associate/student/:studentId/subject/:subjectId', async (req, res) => {

    const { studentId, subjectId } = req.params

    const student = await Student.findByPk(studentId)

    if (!student) {
        return res.status(400).json({ error: 'Student not found' })
    }

    const insert = await student.addSubjects(subjectId)

    return res.status(200).json(insert)
})

module.exports = routes