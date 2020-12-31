const { expect } = require("chai");

describe('status.getApiStatus', function() {
    const getApiStatus = require('../../services/status').getApiStatus;

    describe('URL Connected: ok equals TRUE', function() {
        it('should return status code 200', function(done) {
            let okUrl = 'https://jsonplaceholder.typicode.com/users';
            getApiStatus(okUrl)
            .then((status) => {
                expect(status.ok).to.be.ok;
                expect(status.response).to.be.true;
                expect(status.status).to.be.equal(200);
                expect(status.statusText).to.be.equal('OK');
                done();
            })
        })
    })

    describe('URL Error: ok equlas FALSE', function() {

            it('should return NO response', function(done) {
                let badUrl = 'https://localhost:12345';
                getApiStatus(badUrl)
                .then((status) => {
                    expect(status.ok).to.be.false;
                    expect(status.response).to.be.false;
                    expect(status.status).to.be.equal('ECONNREFUSED');
                    done();
                })
            })

            it('should return status code 404', function(done) {
                let badUrl = 'https://jsonplaceholder.typicode.com/user';
                getApiStatus(badUrl)
                .then((status) => {
                    expect(status.ok).to.be.false;
                    expect(status.response).to.be.true;
                    expect(status.status).to.be.equal(404);
                    expect(status.statusText).to.be.equal('Not Found');
                    done();
                })
            })
    })
});