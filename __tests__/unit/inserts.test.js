const request = require('supertest')

const app = require('../../src/server')
const truncate = require('../utils/truncate')

const Professor = require('../../src/models/Professor')

describe('populating database', () => {
    beforeEach(async () => {
        await truncate()
    })

    
    it('should insert data in table professor', async () => {
    
        await Professor.create({ name: 'René Descartes' })

        const response = await request(app)
            .post('/professor')
            .send({
                name: 'René Descartes'
            })

        expect(response.status).toBe(200)
    })
})
