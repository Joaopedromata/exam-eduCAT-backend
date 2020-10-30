const request = require('supertest')

const app = require('../../src/server')

const factory = require('../factories')

describe('updating values in database', () => {
    
    it('should insert a new value in table isBusy', async () => {
    
        const student = await factory.create('Student')

        const response = await request(app)
            .put(`/students/${student.dataValues.id}`)
            .send({
                isBusy: false
            })

        expect(response.status).toBe(200)
    })
})
