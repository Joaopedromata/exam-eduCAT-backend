const sequelize = require('sequelize')
const Subject = require("../models/Subject")


module.exports = {
    
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