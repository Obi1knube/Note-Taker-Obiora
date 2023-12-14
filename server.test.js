const request = require('supertest');
const app = require('./server.js');


test('GET /api/notes should return all saved notes as JSON', async () => {
    const response = await request(app).get('/api/notes');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(/* expected response body */);
  });