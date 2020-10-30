const Professor = require("../models/Professor")

module.exports = {

    async store(req, res){

        const { name } = req.body
    
        const insert = await Professor.create({ name })
        
        return res.status(200).json(insert)
    }
}