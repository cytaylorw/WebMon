const chai = require("chai");
const expect = chai.expect;
const { app } = require('../../index');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
describe('GET /api/status', function() {

    describe('URL Connected: ok equals TRUE', function() {
        it('should have body with status code 200', function(done) {
            let okUrl = 'https://jsonplaceholder.typicode.com/users';
            chai.request(app)
            .get('/api/status?url=' + okUrl)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res.body.ok).to.be.ok;
                expect(res.body.response).to.be.ok;
                expect(res.body.status).to.be.equal(200);
                expect(res.body.statusText).to.be.equal('OK');
                expect(res.body.url).to.be.equal(okUrl);
                done();
            })
        })
    })

    describe('URL Error: ok equlas FALSE', function() {

        it('should have body with NO response', function(done) {
            let badUrl = 'https://localhost:12345';
            chai.request(app)
            .get('/api/status?url=' + badUrl)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res.body.ok).to.be.false;
                expect(res.body.response).to.be.false;
                expect(res.body.status).to.be.equal('ECONNREFUSED');
                expect(res.body.url).to.be.equal(badUrl);
                done();
            })
        })

        it('should have body with status code 404', function(done) {
            let badUrl = 'https://jsonplaceholder.typicode.com/user';
            chai.request(app)
            .get('/api/status?url=' + badUrl)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res.body.ok).to.be.false;
                expect(res.body.response).to.be.true;
                expect(res.body.status).to.be.equal(404);
                expect(res.body.statusText).to.be.equal('Not Found');
                expect(res.body.url).to.be.equal(badUrl);
                done();
            })
        })
    })
});