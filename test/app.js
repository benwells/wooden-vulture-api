require("babel/register");
import request from 'supertest';
import app from '../server/index.js';

describe('GET /api/', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/api')
      .expect(200, done);
  });
});
