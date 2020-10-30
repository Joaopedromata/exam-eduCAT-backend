const Router = require('express')

const SubjectsControlles = require('./controllers/SubjectsController')
const StudentsController = require('./controllers/StudentsController')
const AssociationsController = require('./controllers/AssociationsController')
const ProfessorsController = require('./controllers/ProfessorsController')

const routes = Router()

routes.post('/students', StudentsController.store)

routes.get('/students/subject/:subjectId', StudentsController.index)
routes.get('/students/:name/subject/:subjectId', StudentsController.search)
routes.get('/students/subject/:subjectId/count',StudentsController.countAbsent)
routes.get('/students/subject/:subjectId/total', StudentsController.countTotal)

routes.put('/students/:studentId/reset', StudentsController.resetState)
routes.put('/students/:studentId', StudentsController.changeState)

routes.get('/subjects',  SubjectsControlles.index)
routes.post('/subjects',  SubjectsControlles.store)

routes.post('/associate/professor/:professorId/subject/:subjectId', AssociationsController.ProfessorsSubjects)
routes.post('/associate/student/:studentId/subject/:subjectId', AssociationsController.StudentsSubjects)

routes.post('/professors', ProfessorsController.store)



module.exports = routes