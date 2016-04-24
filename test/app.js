require("babel/register")
var request = require('supertest');
var app = require('../server/index.js');

describe('GET /api/', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/api')
      .expect(200, done);
  });
});
