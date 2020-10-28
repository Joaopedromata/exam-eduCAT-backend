const Student = require("../models/Student");
const Subject = require("../models/Subject");

module.exports = {
    
    async index(req, res){
        
        const { subjectId } = req.params

        const show = await Subject.findByPk(subjectId, {
            include: { association: 'students',  through: { attributes: [] } }
        })

        return res.status(200).json(show)
    },

    async changeState(req, res){
       
        const { studentId } = req.params

        const checkBoolean = await Student.findByPk(studentId)

        if (!checkBoolean)
            return res.status(400).json({ error: 'Studend not found' })

        if (checkBoolean.isBusy) {

            await Student.update({ isBusy: false }, { where: { id: studentId }})           
        
            return res.status(200).json(checkBoolean)
        }

        await Student.update({ isBusy: true }, { where: { id: studentId }})

        return res.status(200).json(checkBoolean)
    },

    async search(req, res){
        const { name } = req.params

        const search = await Student.findOne({ where: { name }})

        if (!search) {
            return res.status(400).json({ error: 'Student not found' })
        }

        return res.status(200).json(search)
    }
}