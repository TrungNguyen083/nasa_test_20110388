const request = require('suppertest')
const app = require('app')

describe('Test endpoits', () => {
    it('should get all launches', async () => {
        const res = await request(app).get('/launches');
        expect(res.statusCode).toEqual(200);
    });

    it('should add launch', async () => {
        const newLaunch = {
            flightNumber: 100,
            mission: 'Test',
            customer: ['Test', 'Test'],
            rocket: 'Test',
            launchDate: 'Test',
            target: 'Test',
            upcoming: true,
            success: true
        }
        const res = await request(app).post('/launches').send(newLaunch);
        expect(res.statusCode).toEqual(201);
    });

    it('should abort a launch', async () => {
        const res = await request(app).delete('/launches/launchId');
        expect(res.statusCode).toEqual(200);
    });
});