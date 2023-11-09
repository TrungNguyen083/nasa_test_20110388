const request = require('suppertest')
const app = require('app')

describe('Test planets endpoits', () => {
    it('should get all planets', async () => {
        const res = await request(app).get('/planets');
        expect(res.statusCode).toEqual(200);
    })
    
})