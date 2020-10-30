const Subject = require("../models/Subject")


module.exports = {

    async store(req, res){

        const { name } = req.body

        const insert = await Subject.create({ name })

        return res.status(200).json(insert)
    },
    
    async index(req, res){

        const show = await Subject.findAll({
            order: [[ 'name', 'ASC' ]],
            include: { 
                association: 'students',
                through: { attributes: [] },       
            }
        })

        return res.status(200).json(show)
    }
    
}