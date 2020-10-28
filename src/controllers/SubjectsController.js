const Subject = require("../models/Subject")

module.exports = {
    
    async index(req, res){

        const show = await Subject.findAll({
            order: [[ 'name', 'ASC' ]]
        })

        return res.status(200).json(show)
    }
}