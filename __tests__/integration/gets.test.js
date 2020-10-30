const request = require('supertest')

const app = require('../../src/server')

const factory = require('../factories')

describe('get values from database', () => {
    
    it('should bring all students of each subject', async () => {
    
        const subject = await factory.create('Subject')

        const response = await request(app)
            .get(`/students/subject/${subject.dataValues.id}`)

        expect(response.status).toBe(200)
    })

    it('should bring all subjects', async () => {

        const response = await request(app)
            .get('/subjects')

        expect(response.status).toBe(200)
    })

    it('should find a name', async () => {

        const subject = await factory.create('Subject')

        const response = await request(app)
            .get(`/students/subject/${subject.dataValues.id}`)

        expect(response.status).toBe(200)
    })

    it('should count students', async () => {

        const subject = await factory.create('Subject')

        const response = await request(app)
            .get(`/students/subject/${subject.dataValues.id}/count`)

        expect(response.status).toBe(200)
    })
})


