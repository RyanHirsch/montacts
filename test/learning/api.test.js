import expect from 'expect';
import request from 'supertest';
import app from '../../src/app';

describe('super test usage', function() {
  it('works', function(done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).toInclude({ working: true });
        done();
      });
  });
});
