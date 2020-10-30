const { Op } = require('sequelize')
const Student = require("../models/Student");
const Subject = require("../models/Subject");
const sequelize = require('sequelize')

module.exports = {
    
    async store(req, res){

        const { name } = req.body
    
        const insert = await Student.create({ name })
        
        return res.status(200).json(insert)
    },

    async index(req, res){
        
        const { subjectId } = req.params

        const show = await Subject.findByPk(subjectId, {
            include: { 
                association: 'students',  
                through: { attributes: [] }, 
                order: [[ 'name', 'ASC' ]]
            }
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
        
            return res.status(200).json({ success: 'Now is false' })
        }

        await Student.update({ isBusy: true }, { where: { id: studentId }})

        return res.status(200).json({ success: 'Now is true' })
    },

    async search(req, res){

        const query = `%${req.params.name}%`
        const subjectId = req.params.subjectId

        const search = await Subject.findByPk(subjectId,{
            include: [
                {
                    association: 'students',
                    through: { attributes: [] },
                    where: { name: { [Op.like]: query } },
                    order: [[ 'name', 'ASC' ]]
                }
            ]
        })

        if (!search) {
            return res.status(400).json({ error: 'Student not found' })
        }

        return res.status(200).json(search)
    },

    async countAbsent(req, res){
        
        const { subjectId } = req.params
        
        const count = await Subject.findByPk(subjectId,{
            include: { 
                association: 'students',
                where: { isBusy: false },
                attributes: [[sequelize.fn('count'), 'count']],
                through: { attributes: [] }
            }
        })

        return res.status(200).json(count)
    },

    async countTotal(req, res){
        
        const { subjectId } = req.params
        
        const count = await Subject.findByPk(subjectId,{
            include: { 
                association: 'students',
                attributes: [
                    [sequelize.fn('count'), 'count'],
                ],
                through: { attributes: [] }
            }
        })

        return res.status(200).json(count)
    },

    async resetState(req, res){

        const { studentId } = req.params

        const checkStudent = await Student.findByPk(studentId)

        if (!checkStudent){
            return res.status(400).json({ error: 'Student not found' })
        }
            
        
        await Student.update({ isBusy: false }, { where: { id: studentId }})           
        
        return res.status(200).json({ success: 'Now is false' })
    }
}








