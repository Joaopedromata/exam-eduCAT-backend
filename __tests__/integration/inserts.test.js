const request = require('supertest')

const app = require('../../src/server')
const truncate = require('../utils/truncate')

const factory = require('../factories')

describe('populating database', () => {

    beforeEach(() => {
        truncate()
    })

    
    it('should insert data in table professors', async () => {
    
        await factory.create('Professor')

        const response = await request(app)
            .post('/professors')
            .send({
                name: 'René Descartes'
            })

        expect(response.status).toBe(200)
    })

    it('should insert data in table students', async () => {
    
        await factory.create('Student')

        const response = await request(app)
            .post('/students')
            .send({
                name: 'José Oliveira da Silva'
            })

        expect(response.status).toBe(200)
    })

    it('should insert data in table subjects', async () => {
    
        await factory.create('Subject')

        const response = await request(app)
            .post('/subjects')
            .send({
                name: 'Matemática'
            })

        expect(response.status).toBe(200)
    })
})
