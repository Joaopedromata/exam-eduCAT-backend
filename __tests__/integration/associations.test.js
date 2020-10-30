const request = require('supertest')

const app = require('../../src/server')

const factory = require('../factories')

describe('insert associations on database', () => {
    
    it('should insert a new value in table isBusy', async () => {
    
        const subject = await factory.create('Subject')
        const professor = await factory.create('Professor')

        const response = await request(app)
            .post(`/associate/professor/${professor.dataValues.id}/subject/${subject.dataValues.id}`)

        expect(response.status).toBe(200)
    })
})