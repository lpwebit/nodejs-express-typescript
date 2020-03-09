import {expect} from 'chai';
import app from '../src/server';
import {agent as request} from 'supertest';

describe("Index Test", () => {
  it('should always pass', function () {
    expect(true).to.equal(true);
  });

  it('should GET /', async function () {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.message).equals('hello world');
  });
});
