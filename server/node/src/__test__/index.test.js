const request = require('supertest');
const app = require('../app');


describe('GET /', () => {
    it('should response "Hello World!" and return 200', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World!');
        expect(response.statusCode).toBe(200);
    });
});

describe('GET /todos', () => {
    it('should response todo list and return 200', async () => {
        const response = await request(app).get('/todos');
        expect(response.body).toEqual(
            [
                {
                    "text": "吃饭",
                    "done": false
                },
                {
                    "text": "睡觉",
                    "done": false
                },
                {
                    "text": "打豆豆",
                    "done": true
                }
            ]
        )
        expect(response.statusCode).toBe(201);
    });
});