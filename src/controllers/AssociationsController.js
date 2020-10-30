const Professor = require("../models/Professor")
const Student = require("../models/Student")

module.exports = {

    async ProfessorsSubjects(req, res){

        const { professorId, subjectId } = req.params
    
        const professor = await Professor.findByPk(professorId)
    
        if (!professor) {
            return res.status(400).json({ error: 'Professor not found' })
        }
    
        const insert = await professor.addSubjects(subjectId)
    
        return res.status(200).json(insert)
    },

    async StudentsSubjects(req, res){

        const { studentId, subjectId } = req.params
    
        const student = await Student.findByPk(studentId)
    
        if (!student) {
            return res.status(400).json({ error: 'Student not found' })
        }
    
        const insert = await student.addSubjects(subjectId)
    
        return res.status(200).json(insert)
    }
}